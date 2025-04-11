import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyFormData from "../service/verifyFormData.js";

var checkLogin = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.adminCollection;

  try {
    var validFormData = await verifyFormData(login, passwd, collection);

    if (validFormData) {
      var token = JWT.sign({ payload: login }, env.secretKey, {
        expiresIn: "1h",
      });

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

export default checkLogin;
