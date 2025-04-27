import { Router } from "express";

import ordersList from "./controllers/orderList.js";
import orderListHtml from "./controllers/orderListHtml.js";

import getOrderHTML from "./controllers/getrOrderHtml.js";
import getOrderData from "./controllers/orderData.js";

import getXLSXHtml from "./controllers/getXLSXHtml.js";
import getXLSXData from "./controllers/getXLSXData.js";

import checkFileExist from "../xlsx/controllers/checkFileExist.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/orderlist-api/:userId", ordersList);
router.get("/orderlist/:userId", orderListHtml);

router.get("/order/:userId/:orderId", getOrderHTML);
router.get("/order-api/:userId/:orderId", getOrderData);

router.get("/xlsx/:userId/:orderId", getXLSXHtml);
router.get("/xlsx-api/:userId/:orderId", getXLSXData);

router.get("/check/:userId/:orderId", checkFileExist);
export { router as userPath };
