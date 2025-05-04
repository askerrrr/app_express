import { DatabaseError } from "../../../customError/index.js";

var getAll = async (collection) => {
  try {
    return await collection.find().exec();
  } catch (e) {
    throw new DatabaseError("getAll", e);
  }
};

export default getAll;
