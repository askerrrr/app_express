import { Router } from "express";

import updateItemId from "./controllers/updateItemId.js";

var router = Router({ caseSensitive: true, strict: true });

router.patch("/", updateItemId);

export { router as itemId };
