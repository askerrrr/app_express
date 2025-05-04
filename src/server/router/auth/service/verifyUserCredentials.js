import argon2 from "argon2";

var verifyUserCredentials = async (userLogin, userPasswd, collection) => {
  try {
    var userData = await collection.getUser(userLogin);

    if (!userData) {
      return;
    }

    var { userId, passwd } = userData;

    if (userLogin !== userId) {
      return;
    }

    return userPasswd == passwd;
    //var validLogin = await argon2.verify(userId, userLogin);

    // if (!validLogin) {
    //   return;
    // }

    // var validPasswd = await argon2.verify(passwd, userPasswd);

    // return validPasswd;
  } catch (err) {}
};

export default verifyUserCredentials;
