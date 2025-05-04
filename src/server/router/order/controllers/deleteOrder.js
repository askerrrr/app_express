import deleteOrderFile from "../services/deleteOrderFile.js";
import sendDeleteOrderRequest from "../services/sendDeleteOrderRequest.js";

var deleteOrder = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { deleteOrderFromItemCollection } =
    req.app.locals.itemCollectionServices();

  var { getOrderFilePath, deleteOrderFromUserCollection } =
    req.app.locals.userCollectionServices();

  try {
    var successfullDeleteOrder = await sendDeleteOrderRequest(userId, orderId);

    var filePath = await getOrderFilePath(userId, orderId);

    var orderFileIsDeleted = await deleteOrderFile(filePath);

    var orderIsDeletedFromUserCollection = await deleteOrderFromUserCollection(
      userId,
      orderId
    );

    var orderIsDeletedFromItemCollection = await deleteOrderFromItemCollection(
      userId,
      orderId
    );

    return successfullDeleteOrder &&
      orderFileIsDeleted &&
      orderIsDeletedFromUserCollection &&
      orderIsDeletedFromItemCollection
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (e) {
    next(e);
  }
};

export default deleteOrder;
