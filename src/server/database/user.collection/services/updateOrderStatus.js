import { DatabaseError } from "../../../customError/index.js";

var updateOrderStatus = async (collection, userId, orderId, orderStatus) => {
  try {
    var result = await collection.updateOne(
      { userId, "orders.id": orderId },
      {
        $set: { "orders.$.orderStatus": orderStatus },
      }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("updateOrderStatus", e, userId, orderId);
  }
};

export default updateOrderStatus;
