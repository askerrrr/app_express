import logger from "../../logger.js";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import customErrors from "../../customError/index.js";

var __dirname = dirname(fileURLToPath(import.meta.url));
var errorPagePath = join(__dirname, "../../public/html/errorPage.html");

var errorHandler = async (e, req, res, next) => {
  console.log("e: ", e);
  if (customErrors.some((err) => e instanceof err)) {
    return res.sendStatus(500);
  } else {
    return res.sendStatus(500);
  }
};

export default errorHandler;
