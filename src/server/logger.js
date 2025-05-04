import pino from "pino";

var logger = pino(
  { timestamp: pino.stdTimeFunctions.isoTime },
  pino.destination("/var/error.log")
);

export default logger;
