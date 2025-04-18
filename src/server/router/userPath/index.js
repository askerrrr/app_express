import { Router } from "express";

import ordersList from "./controllers/orderList.js";
import orderListHtml from "./controllers/orderListHtml.js";

var router = Router();

router.get("/orderlist-api/:userId", ordersList);
router.get("/orderlist/:userId", orderListHtml);

export { router as userPath };
