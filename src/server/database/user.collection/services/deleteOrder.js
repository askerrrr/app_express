import { DatabaseError } from "../../../customError/index.js";

var deleteOrder = async (collection, userId, orderId) => {
  try {
    var result = await collection.updateOne(
      { userId, "orders.id": orderId },
      {
        $pull: { orders: { id: orderId } },
      }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("deleteOrder", e, userId, orderId);
  }
};

export default deleteOrder;
