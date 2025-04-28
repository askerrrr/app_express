import allCheckboxesAreSelected from "./allCheckboxesAreSelected.js";
import getLastUnmarkedCheckboxID from "./getLastUnmarkedCheckboxID.js";

var sendStatus = async (userId, orderId, item) => {
  var response = await fetch("/purchasedstatus", {
    method: "PATCH",
    body: JSON.stringify({ userId, orderId, item }),
    headers: { "Content-Type": "application/json" },
  });

  return response.status == 200;
};

const obj = {};

var sendPurchasedStatus = async (userId, orderId, item) => {
  var result = await getLastUnmarkedCheckboxID("input[name=purchased-status]");
  console.log(result);
  if (result) {
    obj.lastUnmarkedCheckboxID = result;
  }

  var isAllCheckboxesAreSelected = await allCheckboxesAreSelected(
    "input[name=purchased-status]"
  );

  if (isAllCheckboxesAreSelected) {
    var isConfirmed = confirm("Все товары выкуплены.\nИзменить статус заказа?");

    if (isConfirmed) {
      var successResponse = await sendStatus(userId, orderId, item);

      if (!successResponse) {
        alert(
          "Ошибка при обновлении статуса выкупа\nили отправке новово статуса заказчику"
        );
        return;
      }

      delete obj?.lastUnmarkedCheckboxID;

      return alert("Статус заказа именен");
    }

    console.log(obj.lastUnmarkedCheckboxID);
    return obj?.lastUnmarkedCheckboxID
      ? (document.getElementById(obj.lastUnmarkedCheckboxID).checked = false)
      : alert("Не удалось найти последний неотмеченный чекбокс");
  }

  var successResponse = await sendStatus(userId, orderId, item);
  if (!successResponse) {
    alert("Ошибка при обновлении статуса выкупа");
    return;
  }
};

export default sendPurchasedStatus;
