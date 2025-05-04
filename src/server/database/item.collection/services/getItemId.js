import { DatabaseError } from "../../../customError/index.js";

var getItemId = async (collection, userId, orderId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var { items } = orders.find((order) => order.id == orderId);

    var itemId = items.map((item) => item.id);

    return itemId;
  } catch (e) {
    throw new DatabaseError("getItemId", e, userId, orderId);
  }
};

export default getItemId;
