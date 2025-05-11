import rowForListOfActiveOrders from "../../services/row/rowForListOfActiveOrders.js";

var getOrderList = async () => {
  var pathParts = window.location.pathname.split("/");

  var userId = pathParts.at(-1);

  var url = "/orders/api/" + userId;

  var response = await fetch(url);

  var data = await response.json();

  try {
    if (!response.ok) {
      window.location.href = data.redirectUrl;

      return;
    }

    await rowForListOfActiveOrders(data);
  } catch (e) {
    window.location.href = "/notfound/user"; //redirectUrl;
  }
};

getOrderList();
