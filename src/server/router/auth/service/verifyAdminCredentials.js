import argon2 from "argon2";

var verifyAdminCredentials = async (adminLogin, adminPasswd, collection) => {
  try {
    var { login, passwd } = await collection.findOne().exec();

    var validLogin = await argon2.verify(login, adminLogin);
    var validPasswd = await argon2.verify(passwd, adminPasswd);

    return validLogin && validPasswd;
  } catch (err) {}
};

export default verifyAdminCredentials;
