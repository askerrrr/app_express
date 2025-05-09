import {
  DatabaseError,
  UserNotFoundError,
} from "../../../customError/index.js";

var getOrders = async (collection, userId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      throw new UserNotFoundError();
    }

    return user.orders;
  } catch (e) {
    if (e instanceof UserNotFoundError) {
      throw e;
    }

    throw new DatabaseError("getOrders", e, userId);
  }
};

export default getOrders;
