import { Router } from "express";
import orderNotFound from "./controllers/orderNotFound.js";
import userNotFound from "./controllers/userNotFound.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/order", orderNotFound);

router.get("/user", userNotFound);

export { router as notFound };
