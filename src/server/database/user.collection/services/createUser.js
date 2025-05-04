import { DatabaseError } from "../../../customError/index.js";

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
  } catch (e) {
    throw new DatabaseError("createUser", e, userId);
  }
};

export default createUser;
