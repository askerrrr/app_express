import { DatabaseError } from "../../../customError/index.js";

var getOrderFilePath = async (collection, userId, orderId) => {
  try {
    var { orders } = await collection.findOne({ userId }).exec();

    var { file } = orders.find((order) => order.id === orderId);

    var { path } = file;

    return path;
  } catch (e) {
    throw new DatabaseError("getOrderFilePath", e, userId, orderId);
  }
};

export default getOrderFilePath;
