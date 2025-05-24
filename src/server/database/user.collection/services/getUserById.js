import { DatabaseError } from "../../../customError/index.js";

var getUserById = async (collection, userId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      return;
    }

    return user;
  } catch (e) {
    throw new DatabaseError("getUserById", e, userId);
  }
};

export default getUserById;
