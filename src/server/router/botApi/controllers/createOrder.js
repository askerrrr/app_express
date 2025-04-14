import logger from "../../../logger.js";
import downloadOrderFile from "../services/downloadOrderFile.js";
import validateAuthHeader from "../services/validateAuthHeader.js";
import getDataFromXLSX from "../../xlsx/services/getDataFromXLSX.js";
import deleteOrderFile from "../../order/services/deleteOrderFile.js";

var createOrder = async (req, res) => {
  var authHeader = req.headers?.authorization;

  try {
    var validAuthHeader = await validateAuthHeader(authHeader);

    if (!validAuthHeader) {
      return res.sendStatus(401);
    }

    var itemCollection = req.app.locals.itemCollectionServices();

    var userCollection = req.app.locals.userCollectionServices();

    var deleteOrderData = async () => {
      await deleteOrderFile(path);
      await itemCollection.deleteOrder(userId, id);
      await userCollection.deleteOrder(userId, id);
      return res.sendStatus(304);
    };

    var deleteUserData = async () => {
      await userCollection.deleteUser(userData.userId);
      await itemCollection.deleteUser(userData.userId);
      return res.sendStatus(304);
    };

    var order = req.body;

    var { id, file, type, userId } = order;

    var user = await userCollection.getUser(userId);

    if (!user) {
      var userIsCreated = await userCollection.createUser(order);
      var itemCollection = await itemCollection.createItemCollection(order);

      if (!userIsCreated || !itemCollectionIsCreated) {
        await deleteUserData();
      }
    }

    var { path, telegramApiFileUrl } = file;

    var orderIsAdded = await userCollection.createOrder(order);

    if (!orderIsAdded) {
      await deleteOrderData();
    }

    var fileIsWritten = await downloadOrderFile(path, telegramApiFileUrl);

    if (!fileIsWritten) {
      await deleteOrderData();
    }

    if (type == "multiple") {
      var orderEntity = await itemCollection.createOrderEntity(userId, id);

      if (!orderEntity) {
        await deleteOrderData();
      }

      var xlsxData = await getDataFromXLSX(path);

      var itemsIsAdded = await itemCollection.addItems(userId, id, xlsxData);

      if (!itemsIsAdded) {
        await deleteOrderData();
      }
    }

    return res.sendStatus(200);
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.sendStatus(401);
    }

    logger.error({ place: "create order", userId, err });
    return res.status(500);
  }
};

export default createOrder;
