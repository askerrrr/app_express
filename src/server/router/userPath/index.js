import { Router } from "express";

import ordersList from "./controllers/orderList.js";
import orderListHtml from "./controllers/orderListHtml.js";

import getOrderHTML from "./controllers/getrOrderHtml.js";
import getOrderData from "./controllers/orderData.js";

var router = Router();

router.get("/orderlist-api/:userId", ordersList);
router.get("/orderlist/:userId", orderListHtml);

router.get("/order/:userId/:orderId", getOrderHTML);
router.get("/api/order/:userId/:orderId", getOrderData);

export { router as userPath };
