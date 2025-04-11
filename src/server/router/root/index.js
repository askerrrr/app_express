import { Router } from "express";
import getIndexHTML from "./controllers/getIndexHTML.js";
import getUsersData from "./controllers/getUsersData.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/", getIndexHTML);

router.get("/api/users", getUsersData);

export { router as root };
