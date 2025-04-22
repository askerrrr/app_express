import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyAdminCredentials from "../service/verifyAdminCredentials.js";

var checkAdminCredentials = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.adminCollection;

  try {
    var validFormData = await verifyAdminCredentials(login, passwd, collection);

    if (!validFormData) {
      return res.sendStatus(403);
    }

    var payload = { login, role: "admin" };

    var token = JWT.sign(payload, env.secretKey, {
      expiresIn: "1h",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      })
      .json({ redirect: true });
  } catch (err) {
    logger.error({ place: "checking auth data", userId, err });
    res.status(500);
  }
};

export default checkAdminCredentials;
