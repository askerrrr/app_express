var createUser = async (collection, { userId, firstName, userName }) => {
  var user = await collection.insertOne({
    userId,
    firstName,
    userName,
    orders: [],
  });

  var result = await user.save();

  return result === user;
};

export default createUser;
