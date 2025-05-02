import logger from "../../logger.js";

var errorHandler = async (e, req, res, next) => {
  if (e) {
    console.log("e: ", e);
    return res.sendStatus(500);
  }
};

export default errorHandler;
