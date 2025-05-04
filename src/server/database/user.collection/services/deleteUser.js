import { DatabaseError } from "../../../customError/index.js";

var deleteUser = async (collection, userId) => {
  try {
    var result = await collection.deleteOne({ userId });

    return result.acknowledged;
  } catch (e) {
    throw new DatabaseError("deleteUser", e, userId);
  }
};

export default deleteUser;
