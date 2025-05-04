import { DatabaseError } from "../../../customError/index.js";

var updateItemStatus = async (collection, userId, orderId, items) => {
  try {
    var result = await collection.updateOne(
      { userId, "orders.id": orderId },
      {
        $set: { "orders.$.items": items },
      }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("updateItemStatus", e, userId, orderId);
  }
};

export default updateItemStatus;
