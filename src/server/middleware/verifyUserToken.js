import env from "../env_var.js";
import JWT from "jsonwebtoken";

var verifyUserToken = async (req, res, next) => {
  var token = req.cookies?.userToken;
  console.log("cookies: ", req.cookies);
  if (!token) {
    console.log("token is not defined");
    return;
  }

  var user = JWT.verify(token, env.secretKey);

  if (!user) {
    return res.sendStatus(403);
  }

  var { login, role } = user;

  if (login !== "7413876142" && role !== "user") {
    return res.sendStatus(403);
  }

  var paths = req.path.split("/");

  if (!paths.includes(login)) {
    return res.redirect("/user/orderlist/" + login);
  }

  next();
};

export default verifyUserToken;
