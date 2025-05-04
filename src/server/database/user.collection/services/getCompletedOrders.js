import { DatabaseError } from "../../../customError/index.js";

var getCompletedOrders = async (collection, userId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var completedOrders = orders.filter(
      (order) => order.orderStatus == "order-is-completed:6"
    );

    return completedOrders;
  } catch (e) {
    throw new DatabaseError("getCompletedOrders", e, userId);
  }
};

export default getCompletedOrders;
