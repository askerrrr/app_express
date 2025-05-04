import { DatabaseError } from "../../../customError/index.js";

var updateItemId = async (collection, userId, orderId, items) => {
  try {
    var result = await collection.updateOne(
      { userId, "orders.id": orderId },
      {
        $set: { "orders.$.items": items },
      }
    );

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("updateItemId", e, userId, orderId);
  }
};

export default updateItemId;
