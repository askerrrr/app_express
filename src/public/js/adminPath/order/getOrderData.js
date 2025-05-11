import rowForSingle from "../../services/row/rowForSingle.js";
import rowForMultiple from "../../services/row/rowForMultiple.js";

var getOrderData = async () => {
  var pathParts = window.location.pathname.split("/");

  var userId = pathParts.at(-2);
  var orderId = pathParts.at(-1);

  var url = "/orders/api/order/" + userId + "/" + orderId;

  var response = await fetch(url);

  var data = await response.json();

  try {
    if (!response.ok) {
      window.location.href = data.redirectUrl;

      return;
    }

    if (data.type == "single") {
      return await rowForSingle(data);
    }

    if (data.type == "multiple") {
      return await rowForMultiple(data);
    }

    return;
  } catch (e) {
    window.location.href = data.redirectUrl;
  }
};

getOrderData();
