import orderListForUser from "../../services/row/userRow/orderList.js";

var getOrderListForUser = async () => {
  var pathParts = window.location.pathname.split("/");
  var userId = pathParts.at(-1);

  var url = "/user/orderlist-api/" + userId;

  var response = await fetch(url);

  if (!response.ok) {
    var err = await response.text();
    alert("error: ", err);
    return;
  }

  var orders = await response.json();

  await orderListForUser(orders);
};

getOrderListForUser();
