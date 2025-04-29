import sendStatusToServer from "./sendStatusToServer.js";
import allCheckboxesAreSelected from "./allCheckboxesAreSelected.js";
import getLastUnmarkedCheckboxID from "./getLastUnmarkedCheckboxID.js";

const obj = {};

var checkDeliveryStatus = async (userId, orderId, item) => {
  var result = await getLastUnmarkedCheckboxID("input[name=delivery-status]");

  if (result) {
    obj.lastUnmarkedCheckboxID = result;
  }

  var isAllCheckboxesAreSelected = await allCheckboxesAreSelected(
    "input[name=delivery-status]"
  );

  if (!isAllCheckboxesAreSelected) {
    var successResponse = await sendStatusToServer(userId, orderId, item);

    if (!successResponse) {
      return alert("Ошибка при обновлении статуса доставки");
    }
  }

  var isConfirmed = confirm(
    "Все товары доставлены на склад китая.\nИзменить статус заказа?"
  );

  if (isConfirmed) {
    var successResponse = await sendStatusToServer(userId, orderId, item);

    if (!successResponse) {
      return alert(
        "Ошибка при обновлении статуса выкупа\nили отправке новово статуса заказчику"
      );
    }

    delete obj.lastUnmarkedCheckboxID;

    return alert("Статус заказа именен");
  }

  return obj?.lastUnmarkedCheckboxID
    ? (document.getElementById(obj.lastUnmarkedCheckboxID).checked = false)
    : alert("Не удалось найти последний неотмеченный чекбокс");
};

export default checkDeliveryStatus;
