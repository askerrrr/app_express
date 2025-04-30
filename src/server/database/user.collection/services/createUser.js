var createUser = async (collection, { userId, firstName, userName }) => {
  try {
    var user = await collection.insertOne({
      userId,
      firstName,
      userName,
      orders: [],
    });

    var result = await user.save();

    return result === user;
  } catch {
    var err = new Error("error creating user");
    throw err;
  }
};

export default createUser;
