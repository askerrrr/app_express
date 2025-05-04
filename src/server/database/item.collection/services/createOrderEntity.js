import { DatabaseError } from "../../../customError/index.js";

var createOrderEntity = async (collection, userId, orderId) => {
  try {
    var result = await collection.updateOne(
      { userId },
      {
        $push: { orders: { id: orderId, totalSum: "", items: [] } },
      }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("createOrderEntity", e, userId, orderId);
  }
};

export default createOrderEntity;
