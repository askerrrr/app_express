import { DatabaseError } from "../../../customError/index.js";

var getOrderStatus = async (collection, userId, orderId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var { orderStatus } = orders.find((order) => order.id == orderId);

    return orderStatus;
  } catch (e) {
    throw new DatabaseError("getOrderStatus", e, userId, orderId);
  }
};

export default getOrderStatus;
