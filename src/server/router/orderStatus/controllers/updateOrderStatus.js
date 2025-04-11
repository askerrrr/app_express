import logger from "../../../logger.js";
import sendOrderStatus from "../../itemStatus/services/sendOrderStatus.js";

var updateOrderStatus = async (req, res) => {
  var { userId, orderId, orderStatus } = req.body;
  var { updateOrderStatusFromDB } = req.app.locals.userCollectionServices();

  try {
    var successfullResponse = await sendOrderStatus(
      userId,
      orderId,
      orderStatus
    );

    var succesfullUpdate = await updateOrderStatusFromDB(
      userId,
      orderId,
      orderStatus
    );

    return successfullResponse && succesfullUpdate
      ? res.sendStatus(200)
      : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "change order status", userId, err });
    return res.status(500);
  }
};

export default updateOrderStatus;
