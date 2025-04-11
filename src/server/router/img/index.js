import { Router } from "express";

import sendImage from "./controllers/sendImage.js";
import checkFileExist from "../xlsx/controllers/checkFileExist.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/:userId/:orderId", sendImage);

router.get("/check/:userId/:orderId", checkFileExist);

export { router as image };
