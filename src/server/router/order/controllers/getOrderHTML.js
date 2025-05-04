import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getOrderHTML = async (req, res, next) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/adminPath/order/orderData.html")
    );
  } catch (e) {
    next(e);
  }
};

export default getOrderHTML;
