import logger from "../../../logger.js";
import sendOrderStatus from "../services/sendOrderStatus.js";
import updateItemInArray from "../services/updateItemInArray.js";
import allItemsArePurchased from "../services/allItemsArePurchased.js";

var updatePurchasedStatus = async (req, res) => {
  var { userId, orderId, item } = req.body;

  var { getOrders, getItemsData, updateItemStatus } =
    req.app.locals.itemCollectionServices();
  var { getOrderStatus, updateOrderStatusFromDB } =
    req.app.locals.userCollectionServices();

  try {
    var orders = await getOrders(userId, orderId);
    var items = await updateItemInArray(item, orders);

    var itemStatusIsUpdated = await updateItemStatus(userId, orderId, items);

    if (!itemStatusIsUpdated) {
      return res.sendStatus(304);
    }

    var { items } = await getItemsData(userId, orderId);

    var isAllItemsArePurchased = await allItemsArePurchased(items);

    if (isAllItemsArePurchased) {
      var orderStatus = await getOrderStatus(userId, orderId);

      if (orderStatus.value == "in-processing") {
        var newOrderStatus = { id: 2, value: "purchased" };

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
    logger.error({ place: "change purchased status", userId, err });
    return res.status(500);
  }
};

export default updatePurchasedStatus;
