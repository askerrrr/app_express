import { Router } from "express";

import checkFileExist from "../xlsx/controllers/checkFileExist.js";
import downloadOrderFile from "./controllers/downloadOrderFile.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/:userId/:orderId", downloadOrderFile);

router.get("/check/:userId/:orderId", checkFileExist);

export { router as download };
