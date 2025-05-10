var createOrderLink = async (userId, orderId, role) => {
  var btn = document.createElement("button");
  btn.append(orderId);

  var form = document.createElement("form");

  form.append(btn);

  var adminPath = "/orders/orders/order/" + userId + "/" + orderId;

  var userPath = "/user/order/" + userId + "/" + orderId;

  if (role == "admin") {
    form.action = adminPath;
  } else {
    form.action = userPath;
  }

  var td = document.createElement("td");
  td.append(form);

  return td;
};

export default createOrderLink;
