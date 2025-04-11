import getOrderStatus from "../row/services/getOrderStatus.js";
import renderNextUnmarkedPendingStatus from "./renderNextPendingStatus.js";
import renderUnmarkedCheckBoxForFirstStatus from "./renderCheckBoxForFirstStatus.js";

var saveAndRenderCurrentOrderStatus = async (userId, orderId) => {
  try {
    var orderStatus = await getOrderStatus(userId, orderId, "/status/api/");

    let { id, value } = orderStatus;

    var checkBoxCollection = document.querySelectorAll(
      `input[name=order-status]`
    );

    var arrayOfCheckBoxesID = [];

    for (let i = 0; i < checkBoxCollection.length; i++) {
      arrayOfCheckBoxesID.push({ id: +checkBoxCollection[i].id });
    }

    return value == "not-accepted-for-processing"
      ? renderUnmarkedCheckBoxForFirstStatus(arrayOfCheckBoxesID)
      : renderNextUnmarkedPendingStatus(arrayOfCheckBoxesID, +id);
  } catch (err) {
    throw err;
  }
};

export default saveAndRenderCurrentOrderStatus;
