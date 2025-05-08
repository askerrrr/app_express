import logger from "../../logger.js";
import {
  BotServerError,
  BotUserCreateError,
  BotOrderCreateError,
  BotOrderDetailsError,
} from "../../customError/index.js";

var errorHandler = async (e, req, res, next) => {
  logger.error({ error: e });
  console.log("e: ", e);
  if (
    e instanceof BotServerError ||
    e instanceof BotUserCreateError ||
    e instanceof BotOrderCreateError ||
    e instanceof BotOrderDetailsError
  ) {
    return res.sendStatus(500);
  }

  res.status(500);
  return res.sendFile(join(__dirname, "../../../public/html/errorPage.html"));
};

export default errorHandler;
