import logger from "../../logger.js";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  NetworkError,
  DatabaseError,
  BotServerError,
  DatabaseConnectionError,
} from "../../customError/index.js";

var __dirname = dirname(fileURLToPath(import.meta.url));
var errorPagePath = join(__dirname, "../../public/html/errorPage.html");

var errorHandler = async (e, req, res) => {
  if (e instanceof BotServerError) {
    console.log("e: ", e);
    return res.sendStatus(500);
  } else if (e instanceof DatabaseError) {
    return res.sendStatus(500);
  } else if (e instanceof DatabaseConnectionError) {
    return res.sendStatus(500);
  }
};

export default errorHandler;
