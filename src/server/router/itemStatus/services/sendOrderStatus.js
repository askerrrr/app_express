import env from "../../../env_var.js";
import { BotServerError } from "../../../customError/index.js";

var sendOrderStatus = async (userId, orderId, orderStatus) => {
  try {
    var res = await fetch(env.bot_server_orderstatus, {
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

    if (!res.ok) {
      throw new BotServerError(res.statusText, res.status, userId, orderId);
    }

    return true;
  } catch (e) {
    if (e instanceof BotServerError) {
      throw e;
    }

    throw new BotServerError(e.message, e.cause, userId, orderId);
  }
};

export default sendOrderStatus;
