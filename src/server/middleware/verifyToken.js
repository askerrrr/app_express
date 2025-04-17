import JWT from "jsonwebtoken";
import env from "../env_var.js";

var verifyToken = async (req, res, next) => {
  try {
    var token = req.cookies?.token;

    if (!token) {
      return res.sendStatus(500);
    }

    JWT.verify(token, env.secretKey, (err, decode) => {
      if (err) {
        throw err;
      }

      var { role } = decode;
      console.log("decode: ", decode);
      console.log("role: ", role);
    });

    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/auth/admin/login");
  }
};
export default verifyToken;
