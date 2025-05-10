var createBackToOrderButton = async (userId, orderId, role) => {
  var btn = document.createElement("button");
  btn.append("Назад");

  var form = document.createElement("form");

  form.append(btn);
  form.className = "backToOrders";

  if (role == "user") {
    form.action = "/user/order/" + userId + "/" + orderId;
  } else {
    form.action = "/orders/order/" + userId + "/" + orderId;
  }

  return form;
};

export default createBackToOrderButton;
