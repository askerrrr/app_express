import sendOrderStatus from "../../itemStatus/services/sendOrderStatus.js";

var updateOrderStatus = async (req, res, next) => {
  var { userId, orderId, orderStatus } = req.body;

  var userCollection = req.app.locals.userCollectionServices();

  try {
    var successfullResponse = await sendOrderStatus(
      userId,
      orderId,
      orderStatus
    );

    var succesfullUpdate = await userCollection.updateOrderStatus(
      userId,
      orderId,
      orderStatus
    );

    return successfullResponse && succesfullUpdate
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (e) {
    e.origin = updateOrderStatus.name;

    next(e);
  }
};

export default updateOrderStatus;
