import { DatabaseError } from "../../../customError/index.js";

var getOrder = async (collection, userId, orderId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var order = orders.find((order) => order.id == orderId);

    return order;
  } catch (e) {
    throw new DatabaseError("getOrder", e, userId, orderId);
  }
};

export default getOrder;
