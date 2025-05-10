import { Router } from "express";

import deleteUser from "./controllers/deleteUser.js";
import deleteOrder from "./controllers/deleteOrder.js";
import getOrderList from "./controllers/getOrderList.js";
import getOrderData from "./controllers/getOrderData.js";
import getOrderHTML from "./controllers/getOrderHTML.js";
import getCompletedOrdersData from "./controllers/getCompletedOrders.js";
import getHTMLFileForOrderList from "./controllers/getHTMLFileForOrderList.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/api/:userId", getOrderList);

router.get("/order/:userId/:orderId", getOrderHTML);

router.get("/api/order/:userId/:orderId", getOrderData);

router.get("/:userId", getHTMLFileForOrderList);

router.get("/api/completed/:userId", getCompletedOrdersData);

router.delete("/api/delete/:userId", deleteUser);

router.delete("/api/delete/:userId/:orderId", deleteOrder);

export { router as order };
