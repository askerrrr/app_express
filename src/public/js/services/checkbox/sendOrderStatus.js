var sendOrderStatus = async (userId, orderId, orderStatus) => {
  var response = await fetch("/status", {
    method: "PATCH",
    body: JSON.stringify({ userId, orderId, orderStatus }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return alert("Ошибка при обновлении статуса. Попробуйте еще раз.");
  }

  return true;
};

export default sendOrderStatus;
