import { join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

var __dirname = dirname(fileURLToPath(import.meta.url));

var getHTMLFileForOrderList = async (req, res, next) => {
  var { userId } = req.params;

  var { getActiveOrders, getCompletedOrders } =
    req.app.locals.userCollectionServices();

  try {
    var activeOrders = await getActiveOrders(userId);
    var completedOrders = await getCompletedOrders(userId);

    if (activeOrders?.length) {
      return res.sendFile(
        join(
          __dirname,
          "../../../../public/html/adminPath/orderList/activeOrders.html"
        )
      );
    } else if (completedOrders?.length) {
      return res.sendFile(
        join(
          __dirname,
          "../../../../public/html/adminPath/orderList/completedOrders.html"
        )
      );
    } else {
      return res.sendFile(
        join(
          __dirname,
          "../../../../public/html/adminPath/orderList/noOrders.html"
        )
      );
    }
  } catch (e) {
    next(e);
  }
};

export default getHTMLFileForOrderList;
