import JWT from "jsonwebtoken";
import env from "../env_var.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var verifyToken = async (req, res, next) => {
  try {
    var token = req.cookies?.token;

    if (!token) {
      return res.sendFile(
        join(__dirname, "../../public/html/adminPath/auth/authForm.html")
      );
    }

    var user = JWT.verify(token, env.secretKey);

    if (user.role == "admin") {
      return next();
    }

    return next();
  } catch (e) {
    res.clearCookie("token");
    next(e);
  }
};
export default verifyToken;
