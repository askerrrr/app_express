var sendStatusToServer = async (userId, orderId, item) => {
  var response = await fetch("/purchasedstatus", {
    method: "PATCH",
    body: JSON.stringify({ userId, orderId, item }),
    headers: { "Content-Type": "application/json" },
  });

  return response.status == 200;
};

export default sendStatusToServer;
