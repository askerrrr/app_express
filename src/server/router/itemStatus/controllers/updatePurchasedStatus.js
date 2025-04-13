import logger from "../../../logger.js";
import sendOrderStatus from "../services/sendOrderStatus.js";
import updateItemInArray from "../services/updateItemInArray.js";
import allItemsArePurchased from "../services/allItemsArePurchased.js";

var updatePurchasedStatus = async (req, res) => {
  var { userId, orderId, item } = req.body;

  var { getItemsData, updateItemStatus } =
    req.app.locals.itemCollectionServices();
  var { getOrderStatus, updateOrderStatusFromDB } =
    req.app.locals.userCollectionServices();

  try {
    var { items } = await getItemsData(userId, orderId);
    var updatedItems = await updateItemInArray(item, items);

    var itemsIsUpdated = await updateItemStatus(userId, orderId, updatedItems);

    if (!itemsIsUpdated) {
      return res.sendStatus(304);
    }

    var { items } = await getItemsData(userId, orderId);

    var isAllItemsArePurchased = await allItemsArePurchased(updatedItems);

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
