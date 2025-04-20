import env from "../../../env_var.js";
import JWT from "jsonwebtoken";
import validateAuthHeader from "../../botApi/services/validateAuthHeader.js";

var botAuth = async (req, res) => {
  var authHeader = req.headers?.authorization;

  var validHeader = await validateAuthHeader(authHeader);

  if (!validHeader) {
    return res.sendStatus(403);
  }

  var { login, role } = req.body;

  var userToken = JWT.sign({ ...req.body }, env.secretKey, {
    expiresIn: "1m",
  });

  return res
    .cookie("userToken", userToken, {
      httpOnly: true,
      maxAge: 60 * 60,
    })
    .json({ userToken });
};

export default botAuth;
