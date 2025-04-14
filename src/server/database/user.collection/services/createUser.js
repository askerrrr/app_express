var createUser = async (collection, { userId, firstName, userName }) => {
  var result = await collection.insertOne({
    userId,
    firstName,
    userName,
    orders: [],
  });

  return result.acknowledged;
};

export default createUser;
