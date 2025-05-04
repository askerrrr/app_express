import JWT from "jsonwebtoken";
import env from "../../../env_var.js";

var botAuth = async (req, res, next) => {
  try {
    var authHeader = req.headers?.authorization;

    var [type, token] = authHeader.split(" ");

    var user = JWT.verify(token, env.pa_auth_token);

    if (type !== "Bearer" || !user) {
      return res.sendStatus(403);
    }

    var { login, role } = user;

    var payload = { login, role };

    var userToken = JWT.sign(payload, env.secretKey, {
      expiresIn: "1h",
    });

    return res
      .cookie("token", userToken, {
        httpOnly: true,
        // secure: true,
        path: "/user",
        maxAge: 60 * 60 * 1000,
      })
      .json({ userToken });
  } catch (e) {
    next(e);
  }
};

export default botAuth;
