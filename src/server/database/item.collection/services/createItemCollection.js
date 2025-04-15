var createItemCollection = async (collection, { userId }) => {
  var itemCollection = await collection.insertOne({ userId, orders: [] });

  var result = await itemCollection.save();

  return result === itemCollection;
};

export default createItemCollection;
