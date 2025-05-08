import downloadOrderFile from "../services/downloadOrderFile.js";
import validateAuthHeader from "../services/validateAuthHeader.js";
import getDataFromXLSX from "../../xlsx/services/getDataFromXLSX.js";
import deleteOrderFile from "../../order/services/deleteOrderFile.js";
import { BotOrderCreateError } from "../../../customError/index.js";

var createOrder = async (req, res, next) => {
  var itemCollection = req.app.locals.itemCollectionServices();
  var userCollection = req.app.locals.userCollectionServices();

  var authHeader = req.headers?.authorization;

  if (!authHeader) {
    return res.sendStatus(401);
  }

  var validAuthHeader = await validateAuthHeader(authHeader);

  if (!validAuthHeader) {
    return res.sendStatus(403);
  }

  var order = req.body;

  var { id, userId } = order;

  try {
    var user = await userCollection.getUserById(userId);

    if (!user) {
      await userCollection.createUser(order);

      await itemCollection.createItemCollection(order);
    }

    var { path, telegramApiFileUrl } = order.file;

    await userCollection.createOrder(order);

    await downloadOrderFile(path, telegramApiFileUrl);

    if (order.type == "multiple") {
      await itemCollection.createOrderEntity(userId, id);

      var xlsxData = await getDataFromXLSX(path);

      await itemCollection.addItems(userId, id, xlsxData);
    }

    return res.sendStatus(200);
  } catch (e) {
    await itemCollection.deleteOrder(userId, id);
    await userCollection.deleteOrder(userId, id);
    await deleteOrderFile(order.file.path);

    next(new BotOrderCreateError(e.message, e, userId, id));
  }
};

export default createOrder;
