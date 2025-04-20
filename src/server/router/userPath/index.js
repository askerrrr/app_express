import { Router } from "express";

import ordersList from "./controllers/orderList.js";
import orderListHtml from "./controllers/orderListHtml.js";

import getOrderHTML from "./controllers/getrOrderHtml.js";
import getOrderData from "./controllers/orderData.js";
import botAuth from "./controllers/botAuth.js";

import verifyUserToken from "../../middleware/verifyUserToken.js";
import cookieParser from "cookie-parser";

var router = Router();

router.use(cookieParser());

router.post("/auth", botAuth);

router.use(verifyUserToken);

router.get("/orderlist-api/:userId", ordersList);
router.get("/orderlist/:userId", orderListHtml);

router.get("/order/:userId/:orderId", getOrderHTML);
router.get("/api/order/:userId/:orderId", getOrderData);

export { router as userPath };
