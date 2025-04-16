import argon2 from "argon2";

var verifyUserCredentials = async (userLogin, userPasswd, collection) => {
  try {
    var { userId, passwd } = await collection.getUser().exec();

    var validLogin = await argon2.verify(userId, userLogin);

    if (!validLogin) {
      return;
    }

    var validPasswd = await argon2.verify(passwd, userPasswd);

    return validPasswd;
  } catch (err) {
    console.log(err);
  }
};

export default verifyUserCredentials;
