import { Router } from "express";

import createUser from "./controllers/createUser.js";
import createOrder from "./controllers/createOrder.js";
import getOrderDetails from "./controllers/getOrderDetailsForBot.js";

var router = Router({ caseSensitive: true, strict: true });

router.post("/api/users", createUser);

router.post("/api/order", createOrder);

router.get("/api/orders/:userId", getOrderDetails);

export { router as botApi };
