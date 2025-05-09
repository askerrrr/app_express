import {
  DatabaseError,
  OrderNotFoundError,
  UserNotFoundError,
} from "../../../customError/index.js";

var getOrder = async (collection, userId, orderId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      throw new UserNotFoundError();
    }

    var { orders } = user;

    var order = orders.find((order) => order.id == orderId);

    if (!order) {
      throw new OrderNotFoundError();
    }

    return order;
  } catch (e) {
    if (e instanceof UserNotFoundError || e instanceof OrderNotFoundError) {
      throw e;
    }

    throw new DatabaseError("getOrder", e, userId, orderId);
  }
};

export default getOrder;
