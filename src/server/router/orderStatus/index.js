import { Router } from "express";

import updateOrderStatus from "./controllers/updateOrderStatus.js";
import getOrderStatus from "../itemStatus/controllers/getOrderStatus.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/api/:userId/:orderId", getOrderStatus);

router.patch("/", updateOrderStatus);

export { router as orderStatus };
