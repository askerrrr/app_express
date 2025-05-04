import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
var __dirname = dirname(fileURLToPath(import.meta.url));

var orderListHtml = async (req, res, next) => {
  try {
    return res.sendFile(
      join(
        __dirname,
        "../../../../public/html/userPath/orderList/activeOrders.html"
      )
    );
  } catch (e) {
    next(e);
  }
};

export default orderListHtml;
