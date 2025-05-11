import {
  BotServerError,
  BotUserCreateError,
  BotOrderCreateError,
  BotOrderDetailsError,
  OrderNotFoundError,
  UserNotFoundError,
} from "../../customError/index.js";
import logger from "../../logger.js";

var errorHandler = async (e, req, res, next) => {
  console.log("e: ", e.message, req.path);

  if (
    e instanceof BotServerError ||
    e instanceof BotUserCreateError ||
    e instanceof BotOrderCreateError ||
    e instanceof BotOrderDetailsError
  ) {
    return res.sendStatus(500);
  }

  if (e instanceof UserNotFoundError) {
    return res.status(404).json({ redirectUrl: "/notfound/user" });
  }

  if (e instanceof OrderNotFoundError) {
    return res.status(404).json({ redirectUrl: "/notfound/order" });
  }

  return res.status(500).json({ redirectUrl: "/error" });
};

export default errorHandler;
