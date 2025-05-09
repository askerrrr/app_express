import {
  DatabaseError,
  UserNotFoundError,
} from "../../../customError/index.js";

var getUserById = async (collection, userId) => {
  try {
    var user = await collection.findOne({ userId }).exec();

    if (!user) {
      throw new UserNotFoundError();
    }

    return user;
  } catch (e) {
    if (e instanceof UserNotFoundError) {
      throw e;
    }

    throw new DatabaseError("getUserById", e, userId);
  }
};

export default getUserById;
