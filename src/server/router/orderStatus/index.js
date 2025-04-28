import { Router } from "express";

import updateOrderStatus from "./controllers/updateOrderStatus.js";
import getOrderStatus from "../itemStatus/controllers/getOrderStatus.js";
import checkPurchasedStatus from "./controllers/checkPurchasedStatus.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/api/:userId/:orderId", getOrderStatus);

router.get("/check-purchased-status/:userId/:orderId", checkPurchasedStatus);

router.patch("/", updateOrderStatus);

export { router as orderStatus };
