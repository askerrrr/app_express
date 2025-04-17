import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyAdminCredentials from "../service/verifyAdminCredentials.js";

var checkAdminCredentials = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.adminCollection;

  try {
    var validFormData = await verifyAdminCredentials(login, passwd, collection);

    if (validFormData) {
      var token = JWT.sign({ login, role: "admin" }, env.secretKey, {
        expiresIn: "1h",
      });

      req.role = "admin";

      return res
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
        })
        .json({ redirect: true });
    }

    return res.sendStatus(403);
  } catch (err) {
    logger.error({ place: "checking auth data", userId, err });
    res.status(500);
  }
};

export default checkAdminCredentials;
