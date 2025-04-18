import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import logger from "../../../logger.js";
import verifyUserCredentials from "../service/verifyUserCredentials.js";

var checkUserCredentials = async (req, res) => {
  var { login, passwd } = req.body;

  var collection = req.app.locals.userCollectionServices();

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
        .json({
          redirect: true,
          redirectUrl: "/user/orderlist/" + login,
        });
    }

    return res.sendStatus(401);
  } catch (err) {
    logger.error({ place: "checking user auth data", err });
    res.status(500);
  }
};

export default checkUserCredentials;
