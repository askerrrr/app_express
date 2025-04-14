import userCollectionServices from "../../user.collection/user.collection.services.js";

var deleteOrder = async (collection, userId, orderId) => {
  var { getOrderType } = userCollectionServices();

  var orderType = await getOrderType(userId, orderId);

  if (orderType == "multiple") {
    result = await collection.updateOne(
      { userId, "orders.id": orderId },
      { $pull: { orders: { id: orderId } } }
    );

    return result.modifiedCount;
  }

  return true;
};

export default deleteOrder;
