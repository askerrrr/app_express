import { DatabaseError } from "../../../customError/index.js";

var getActiveOrders = async (collection, userId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var activeOrders = orders.filter(
      (order) => order.orderStatus !== "order-is-completed:6"
    );

    return activeOrders;
  } catch (e) {
    throw new DatabaseError("getActiveOrders", e, userId);
  }
};

export default getActiveOrders;
