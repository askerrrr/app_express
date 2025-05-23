var getOrderInfo = async (orders) => {
  var fresh = orders.filter(
    (order) => order.orderStatus.value == "not-accepted-for-processing:0"
  ).length;

  var active = orders.filter(
    (order) => order.orderStatus.value !== "order-is-completed:6"
  ).length;

  var divFresh = document.createElement("div");
  divFresh.append("Новые: ", fresh);
  divFresh.style.color = "#54ff00";

  var divActive = document.createElement("div");
  divActive.append("Активно: ", active);
  divActive.style.color = "#54ff00";

  var td = document.createElement("td");
  var br = document.createElement("br");

  if (fresh == 0 && active !== 0) td.append(divActive);
  if (fresh == 0 && active == 0) td.append("Нет активных");
  if (fresh > 0 && active > 0) td.append(divFresh, br, divActive);

  return td;
};

export default getOrderInfo;
