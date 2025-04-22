import env from "../../../env_var.js";
import JWT from "jsonwebtoken";
import validateAuthHeader from "../services/validateAuthHeader.js";

var botAuth = async (req, res) => {
  try {
    var authHeader = req.headers?.authorization;

    var validHeader = await validateAuthHeader(authHeader);

    if (!validHeader) {
      return res.sendStatus(403);
    }

    var { login, role } = req.body;

    var payload = { login, role };

    var userToken = JWT.sign(payload, env.secretKey, {
      expiresIn: "1h",
    });

    console.log(payload);

    return res
      .cookie("token", userToken, {
        httpOnly: true,
        // secure: true,
        path: "/user",
        maxAge: 60 * 60 * 1000,
      })
      .json({ redirect: true });
  } catch (err) {
    console.log(err);
  }
};

export default botAuth;
