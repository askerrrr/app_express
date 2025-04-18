import { Router } from "express";

import getUserAuthForm from "./controllers.js/getUserAuthForm.js";
import getAdminAuthForm from "./controllers.js/getAdminAuthForm.js";

import checkUserCredentials from "./controllers.js/checkUserCredentials.js";
import checkAdminCredentials from "./controllers.js/checkAdminCredentials.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/admin/", getAdminAuthForm);

router.get("/user/", getUserAuthForm);

router.post("/user/check", checkUserCredentials);

router.post("/admin/check", checkAdminCredentials);

export { router as auth };
