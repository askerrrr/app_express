import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import verifyUserCredentials from "../service/verifyUserCredentials.js";

var checkUserCredentials = async (req, res, next) => {
  // var { login, passwd } = req.body;

  var collection = req.app.locals.userCollectionServices();

  try {
    // var validFormData = await verifyUserCredentials(login, passwd, collection);

    // if (!validFormData) {
    //   return res.sendStatus(401);
    // }

    var authHeader = req.headers?.authorization;

    var [type, token] = authHeader.split(" ");

    var user = JWT.verify(token, env.pa_auth_token);

    if (type !== "Bearer" || !user) {
      return res.sendStatus(403);
    }

    var { login, role } = user;

    var payload = { login, role };

    //var payload = { login, role: "user" };

    var token = JWT.sign(payload, env.secretKey, {
      expiresIn: "1h",
    });

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      })
      .json({ redirect: true });
  } catch (e) {
    next(e);
  }
};

export default checkUserCredentials;
