import logger from "../../logger.js";

var errorHandler = async (e, req, res, next) => {
  logger.error({ error: e });

  return res.status(e.status ?? 500).json({ msg: e.message });
};

export default errorHandler;
