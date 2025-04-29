import sendStatusToServer from "./sendStatusToServer.js";
import allCheckboxesAreSelected from "./allCheckboxesAreSelected.js";
import getLastUnmarkedCheckboxID from "./getLastUnmarkedCheckboxID.js";

const obj = {};

var checkPurchasedStatus = async (userId, orderId, item) => {
  var result = await getLastUnmarkedCheckboxID("input[name=purchased-status]");

  if (result) {
    obj.lastUnmarkedCheckboxID = result;
  }

  var isAllCheckboxesAreSelected = await allCheckboxesAreSelected(
    "input[name=purchased-status]"
  );

  if (!isAllCheckboxesAreSelected) {
    var successResponse = await sendStatusToServer(userId, orderId, item);

    if (!successResponse) {
      return alert("Ошибка при обновлении статуса выкупа");
    }
  }

  var isConfirmed = confirm("Все товары выкуплены.\nИзменить статус заказа?");

  if (isConfirmed) {
    var successResponse = await sendStatusToServer(userId, orderId, item);

    if (!successResponse) {
      alert(
        "Ошибка при обновлении статуса выкупа\nили отправке новово статуса заказчику"
      );
      return;
    }

    delete obj?.lastUnmarkedCheckboxID;

    return alert("Статус заказа именен");
  }

  return obj?.lastUnmarkedCheckboxID
    ? (document.getElementById(obj?.lastUnmarkedCheckboxID).checked = false)
    : alert("Не удалось найти последний неотмеченный чекбокс");
};

export default checkPurchasedStatus;
