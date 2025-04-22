import rowForSingle from "./services/row/rowForSingle.js";
import rowForMultiple from "./services/row/rowForMultipleForUser.js";

var getOrderInfoForUser = async () => {
  var pathParts = window.location.pathname.split("/");
  try {
    var userId = pathParts.at(-2);
    var orderId = pathParts.at(-1);

    var url = "/user/order-api/" + userId + "/" + orderId;

    var response = await fetch(url);

    if (!response.ok) {
      var err = await response.text();
      alert("error: ", err);
      return;
    }

    var order = await response.json();

    if (order.type == "single") {
      return await rowForSingle(order);
    } else if (order.type == "multiple") {
      return await rowForMultiple(order);
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
    alert("error: ", err);
    return;
  }
};

getOrderInfoForUser();
