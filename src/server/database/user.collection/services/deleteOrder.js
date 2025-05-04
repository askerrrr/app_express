import checkOrderExists from "./checkOrderExists.js";
import { DatabaseError } from "../../../customError/index.js";

var deleteOrder = async (collection, userId, orderId) => {
  try {
    var order = await checkOrderExists(collection, userId, orderId);

    if (!order) {
      return true;
    }

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
