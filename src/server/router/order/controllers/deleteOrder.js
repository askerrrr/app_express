import logger from "../../../logger.js";
import deleteOrderFile from "../services/deleteOrderFile.js";
import sendDeleteOrderRequest from "../services/sendDeleteOrderRequest.js";

var deleteOrder = async (req, res) => {
  var { userId, orderId } = req.params;

  var { deleteOrderFromItemCollection } =
    req.app.locals.itemCollectionServices();
  var { getOrderFilePath, deleteOrderFromUserCollection } =
    req.app.locals.userCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);

    var successfullResponse = await sendDeleteOrderRequest(userId, orderId);

    var isFileDeleted = await deleteOrderFile(filePath);
    var successfullDeletedFromUserCollection =
      await deleteOrderFromUserCollection(userId, orderId);

    var successfullDeletedFromItemCollection =
      await deleteOrderFromItemCollection(userId, orderId);

    return successfullResponse &&
      isFileDeleted &&
      successfullDeletedFromUserCollection &&
      successfullDeletedFromItemCollection
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "delete order", userId, err });
    return res.status(500);
  }
};

export default deleteOrder;
