import { Router } from "express";

import getUserAuthForm from "./controllers.js/getUserAuthForm.js";
import getAdminAuthForm from "./controllers.js/getAdminAuthForm.js";

import checkUserCredentials from "./controllers.js/checkUserCredentials.js";
import checkAdminCredentials from "./controllers.js/checkAdminCredentials.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/admin/login", getAdminAuthForm);

router.get("/user/login", getUserAuthForm);

router.post("/user/login/check", checkUserCredentials);

router.post("/admin/login/check", checkAdminCredentials);

export { router as auth };
