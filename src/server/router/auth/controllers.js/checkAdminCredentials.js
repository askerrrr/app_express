import JWT from "jsonwebtoken";
import env from "../../../env_var.js";
import verifyAdminCredentials from "../service/verifyAdminCredentials.js";

var checkAdminCredentials = async (req, res, next) => {
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
      .json({ redirectUrl: "/" });
  } catch (e) {
    next(e);
  }
};

export default checkAdminCredentials;
