import logger from "../../../logger.js";
import sendOrderStatus from "../services/sendOrderStatus.js";
import updateItemInArray from "../services/updateItemInArray.js";
import allItemsAreDelivered from "../services/allItemsAreDelivered.js";

var updateDeliveryStatus = async (req, res) => {
  var { userId, orderId, item } = req.body;

  var { getOrders, getItemsData, updateItemStatus } =
    req.app.locals.itemCollectionServices();
  var { getOrderStatus, updateOrderStatusFromDB } =
    req.app.locals.userCollectionServices();

  try {
    var orders = await getOrders(userId, orderId);
    var items = await updateItemInArray(item, orders);

    var succesfullUpdateItemStatus = await updateItemStatus(
      userId,
      orderId,
      items
    );

    if (!succesfullUpdateItemStatus) {
      return res.sendStatus(304);
    }

    var { items } = await getItemsData(userId, orderId);
    var isAllItemsAreDelivered = await allItemsAreDelivered(items);

    if (isAllItemsAreDelivered) {
      var orderStatus = await getOrderStatus(userId, orderId);

      if (orderStatus.value == "purchased") {
        var newOrderStatus = { id: 3, value: "china-warehouse" };

        var orderStatusIsUpdated = await updateOrderStatusFromDB(
          userId,
          orderId,
          newOrderStatus
        );

        var successfullResponse = await sendOrderStatus(
          userId,
          orderId,
          newOrderStatus
        );

        return successfullResponse && orderStatusIsUpdated
          ? res.sendStatus(200)
          : res.sendStatus(304);
      }

      return res.sendStatus(200);
    }

    return res.sendStatus(200);
  } catch (err) {
    logger.error({ place: "change delivery status", userId, err });
    return res.status(500);
  }
};

export default updateDeliveryStatus;
