import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyUserCredentials from "../service/verifyUserCredentials.js";

var checkUserCredentials = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.userCollectionServices();
  console.log("req.body: ", req.body);
  try {
    var validFormData = await verifyUserCredentials(login, passwd, collection);

    if (validFormData) {
      var token = JWT.sign({ login, role: "user" }, env.secretKey, {
        expiresIn: "1h",
      });

      return res
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60,
        })
        .json({ redirect: true, login });
    }

    return res.sendStatus(403);
  } catch (err) {
    logger.error({ place: "checking auth data", userId, err });
    res.status(500);
  }
};

export default checkUserCredentials;
