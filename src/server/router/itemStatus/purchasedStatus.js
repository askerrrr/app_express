import { Router } from "express";

import getOrderStatus from "./controllers/getOrderStatus.js";
import updatePurchasedStatus from "./controllers/updatePurchasedStatus.js";

var router = Router({ caseSensitive: true, strict: true });

router.patch("/", updatePurchasedStatus);

router.get("/:userId/:orderId", getOrderStatus);

export { router as purchasedStatus };
