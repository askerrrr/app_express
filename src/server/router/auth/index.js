import { Router } from "express";

import checkLogin from "./controllers.js/checkLogin.js";
import getAuthForm from "./controllers.js/getAuthForm.js";

var router = Router({ caseSensitive: true, strict: true });

router.get("/login", getAuthForm);

router.post("/login/check", checkLogin);

export { router as auth };
