import { join } from "node:path";
import { dirname } from "node:path";
import logger from "../../../logger.js";
import { fileURLToPath } from "node:url";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getHTMLFileForOrderList = async (req, res) => {
  var { userId } = req.params;

  var { getActiveOrders, getCompletedOrders } =
    req.app.locals.userCollectionServices();

  try {
    var activeOrders = await getActiveOrders(userId);
    var completedOrders = await getCompletedOrders(userId);

    if (activeOrders?.length) {
      return res.sendFile(
        join(__dirname, "../../../../public/html/activeOrders.html")
      );
    } else if (completedOrders?.length) {
      return res.sendFile(
        join(__dirname, "../../../../public/html/completedOrders.html")
      );
    } else {
      return res.sendFile(
        join(__dirname, "../../../../public/html/noOrders.html")
      );
    }
  } catch (err) {
    logger.error({ place: "getting orders", userId, err });
    return res.status(500);
  }
};

export default getHTMLFileForOrderList;
