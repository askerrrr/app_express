import { join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getOrderHTML = async (req, res, next) => {
  try {
    return res.sendFile(
      join(__dirname, "../../../../public/html/userPath/order/orderData.html")
    );
  } catch (e) {
    next(e);
  }
};

export default getOrderHTML;
