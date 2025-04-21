import JWT from "jsonwebtoken";
import env from "../env_var.js";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var verifyToken = async (req, res, next) => {
  try {
    var token = req.cookies?.token;

    if (!token) {
      return res.sendFile(join(__dirname, "../../public/html/errorPage.html"));
    }

    var user = JWT.verify(token, env.secretKey);

    if (user.role == "admin") {
      next;
    }

    if (user.role == "user") {
      var paths = req.path.split("/");

      if (!paths.includes(user.login)) {
        return res.redirect("/user/orderlist/" + user.login);
      }

      next;
    }

    next();
  } catch (err) {
    res.clearCookie("token");
    return res.sendFile(join(__dirname, "../../public/html/errorPage.html"));
  }
};
export default verifyToken;
