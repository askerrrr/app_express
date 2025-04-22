import env from "../env_var.js";
import JWT from "jsonwebtoken";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

var __dirname = dirname(fileURLToPath(import.meta.url));

var verifyUserToken = async (req, res, next) => {
  var token = req.cookies?.token;

  if (!token) {
    return res.sendFile(join(__dirname, "../../public/html/errorPage.html"));
  }

  var user = JWT.verify(token, env.secretKey);

  if (!user) {
    return res.sendStatus(403);
  }

  if (user.login !== "7413876142" || user.role !== "user") {
    return res.sendStatus(403);
  }

  var paths = req.path.split("/");

  if (!paths.includes(login)) {
    return res.redirect("/user/orderlist/" + login);
  }

  next();
};

export default verifyUserToken;
