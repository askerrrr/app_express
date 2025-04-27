import { join } from "node:path";
import { dirname } from "node:path";
import logger from "../../../logger.js";
import { fileURLToPath } from "node:url";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getOrderHTML = async (_, res) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/adminPath/order/orderData.html")
    );
  } catch (err) {
    logger.error({ location: "getting order file", userId, err });
    return res.status(500);
  }
};

export default getOrderHTML;
