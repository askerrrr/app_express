import getOrderType from "../../user.collection/services/getOrderType.js";

async function deleteOrderFromItemCollection(userId, orderId) {
  var orderType = await getOrderType(this, userId, orderId);

  if (orderType == "multiple") {
    result = await this.updateOne(
      { userId, "orders.id": orderId },
      { $pull: { orders: { id: orderId } } }
    );

    return result.modifiedCount;
  } else {
    return true;
  }
}

export default deleteOrderFromItemCollection;
