import rowForListOfActiveOrders from "../../services/row/rowForListOfActiveOrders.js";

var getOrderList = async () => {
  var pathParts = window.location.pathname.split("/");
  var userId = pathParts.at(-1);

  var url = "/orders/api/orderlist/" + userId;

  var response = await fetch(url);

  var orders = await response.json();

  await rowForListOfActiveOrders(orders);
};

getOrderList();
