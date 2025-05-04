import { DatabaseError } from "../../../customError/index.js";

var createItemCollection = async (collection, { userId }) => {
  try {
    var itemCollection = await collection.insertOne({ userId, orders: [] });

    var result = await itemCollection.save();

    return result === itemCollection;
  } catch (e) {
    throw new DatabaseError("createItemCollection", e, userId);
  }
};

export default createItemCollection;
