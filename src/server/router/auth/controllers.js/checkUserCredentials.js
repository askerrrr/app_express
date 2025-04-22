import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyUserCredentials from "../service/verifyUserCredentials.js";

var checkUserCredentials = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.userCollectionServices();

  try {
    var validFormData = await verifyUserCredentials(login, passwd, collection);

    if (!validFormData) {
      return res.sendStatus(401);
    }

    var payload = { login, role: "user" };

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
    console.log(err);
    logger.error({ place: "checking user auth data", err });
    res.status(500);
  }
};

export default checkUserCredentials;
