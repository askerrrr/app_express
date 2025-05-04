import { DatabaseError } from "../../../customError/index.js";

var createOrder = async (collection, order) => {
  try {
    var result = await collection.updateOne(
      { userId: order.userId },
      { $push: { orders: { ...order } } }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("createOrder", e, order.userId, order.id);
  }
};

export default createOrder;
