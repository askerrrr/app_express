import { DatabaseError } from "../../../customError/index.js";

var getUserById = async (collection, userId) => {
  try {
    return await collection.findOne({ userId }).exec();
  } catch (e) {
    throw new DatabaseError("getUserById", e, userId);
  }
};

export default getUserById;
