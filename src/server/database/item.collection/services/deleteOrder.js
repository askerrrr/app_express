import { DatabaseError } from "../../../customError/index.js";
import checkOrderExists from "../../user.collection/services/checkOrderExists.js";
import userCollectionServices from "../../user.collection/userSollectionServices.js";

var deleteOrder = async (collection, userId, orderId) => {
  try {
    var order = await checkOrderExists(collection, userId, orderId);

    if (!order) {
      return true;
    }

    var { getOrderType } = userCollectionServices();

    var orderType = await getOrderType(userId, orderId);

    if (orderType == "multiple") {
      var result = await collection.updateOne(
        { userId, "orders.id": orderId },
        { $pull: { orders: { id: orderId } } }
      );

      return result.acknowledged;
    }

    return true;
  } catch (e) {
    throw new DatabaseError("deleteOrder", e, userId, orderId);
  }
};

export default deleteOrder;
