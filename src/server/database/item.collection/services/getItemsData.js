import { DatabaseError } from "../../../customError/index.js";

var getItemsData = async (collection, userId, orderId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var { items, totalSum } = orders.find((order) => order.id == orderId);

    return { items, totalSum };
  } catch (e) {
    throw new DatabaseError("getItemsData", e, userId, orderId);
  }
};
export default getItemsData;
