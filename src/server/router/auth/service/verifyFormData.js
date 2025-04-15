import argon2 from "argon2";
import adminCollection from "../../../database/connections/adminDBConnection.js";

var verifyFormData = async (userLogin, userPasswd) => {
  try {
    var { login, passwd } = await adminCollection.findOne().exec();

    var validLogin = await argon2.verify(login, userLogin);
    var validPasswd = await argon2.verify(passwd, userPasswd);

    return validLogin && validPasswd;
  } catch (err) {
    console.log(err);
  }
};

export default verifyFormData;
