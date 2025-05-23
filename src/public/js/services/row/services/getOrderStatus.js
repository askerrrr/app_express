var getOrderStatus = async (userId, orderId, path) => {
  var url = path + userId + "/" + orderId;

  var response = await fetch(url);

  if (!response.ok) {
    alert("Ошибка при получении статуса заказа");
    return;
  }

  var json = await response.json();

  var { orderStatus } = json;

  return orderStatus;
};

export default getOrderStatus;
