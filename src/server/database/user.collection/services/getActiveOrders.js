import {
  DatabaseError,
  UserNotFoundError,
} from "../../../customError/index.js";

var getActiveOrders = async (collection, userId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      throw new UserNotFoundError();
    }

    var { orders } = user;

    var activeOrders = orders.filter(
      (order) => order.orderStatus !== "order-is-completed:6"
    );

    return activeOrders;
  } catch (e) {
    if (e instanceof UserNotFoundError) {
      throw e;
    }

    throw new DatabaseError("getActiveOrders", e, userId);
  }
};

export default getActiveOrders;
