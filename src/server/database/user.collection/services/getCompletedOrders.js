import {
  DatabaseError,
  UserNotFoundError,
} from "../../../customError/index.js";

var getCompletedOrders = async (collection, userId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      throw new UserNotFoundError();
    }

    var { orders } = user;

    var completedOrders = orders.filter(
      (order) => order.orderStatus == "order-is-completed:6"
    );

    return completedOrders;
  } catch (e) {
    if (e instanceof UserNotFoundError) {
      throw e;
    }

    throw new DatabaseError("getCompletedOrders", e, userId);
  }
};

export default getCompletedOrders;
