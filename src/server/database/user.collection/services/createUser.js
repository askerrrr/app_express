import argon2 from "argon2";

var createUser = async (
  collection,
  { userId, passwd, firstName, userName }
) => {
  var passwd = await argon2.hash(passwd);

  var user = await collection.insertOne({
    userId,
    passwd,
    firstName,
    userName,
    orders: [],
  });

  var result = await user.save();

  return result === user;
};

export default createUser;
