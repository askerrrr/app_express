import argon2 from "argon2";

var verifyAdminCredentials = async (adminLogin, adminPasswd, collection) => {
  try {
    var { login, passwd } = await collection.find().exec();

    var validLogin = await argon2.verify(login, adminLogin);
    var validPasswd = await argon2.verify(passwd, adminPasswd);

    return validLogin && validPasswd;
  } catch (err) {
    console.log(err);
  }
};

export default verifyAdminCredentials;
