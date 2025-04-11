import { Router } from "express";

import getOrderStatus from "./controllers/getOrderStatus.js";
import updateDeliveryStatus from "./controllers/updateDeliveryStatus.js";

var router = Router({ caseSensitive: true, strict: true });

router.patch("/", updateDeliveryStatus);

router.get("/:userId/:orderId", getOrderStatus);

export { router as deliveryStatus };
