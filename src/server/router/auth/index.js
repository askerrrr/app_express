import { Router } from "express";

import getAuthForm from "./controllers.js/getAuthForm.js";
import getUserAuthForm from "./controllers.js/userAuth.js";
import checkUserCredentials from "./controllers.js/checkUserCredentials.js";
import checkAdminCredentials from "./controllers.js/checkAdminCredentials.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/admin/login", getAuthForm);

router.get("/user/login", getUserAuthForm);

router.post("/user/login/check", checkUserCredentials);

router.post("/admin/login/check", checkAdminCredentials);

export { router as auth };
