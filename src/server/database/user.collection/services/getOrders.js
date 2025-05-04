import { DatabaseError } from "../../../customError/index.js";

var getOrders = async (collection, userId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    return orders;
  } catch (e) {
    throw new DatabaseError("getOrders", e, userId);
  }
};

export default getOrders;
