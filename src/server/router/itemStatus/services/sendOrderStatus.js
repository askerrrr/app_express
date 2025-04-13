import env from "../../../env_var.js";

var sendOrderStatus = async (userId, orderId, orderStatus) => {
  var response = await fetch(env.bot_server_orderstatus, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + env.bot_secret_key,
    },
    body: JSON.stringify({
      userId,
      orderId,
      orderStatus,
    }),
  });

  return response.status == 200;
};

export default sendOrderStatus;
