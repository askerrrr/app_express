var createBackToOrdersButton = async (userId, role) => {
  var btn = document.createElement("button");
  btn.append("Назад");

  var form = document.createElement("form");

  form.append(btn);
  form.className = "backToOrders";

  if (role == "user") {
    form.action = "/user/orderlist/" + userId;
  } else {
    form.action = "/orderinfo/orders/" + userId;
  }

  return form;
};

export default createBackToOrdersButton;
