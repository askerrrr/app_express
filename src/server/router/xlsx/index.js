import { Router } from "express";

import getSheetHTML from "./controllers/getSheetHTML.js";
import getSheetData from "./controllers/getSheetData.js";
import checkFileExist from "./controllers/checkFileExist.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/:userid/:orderid", getSheetHTML);

router.get("/api/:userId/:orderId", getSheetData);

router.get("/check/:userId/:orderId", checkFileExist);

export { router as xlsx };
