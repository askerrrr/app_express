var createItemCollection = async (collection, { userId }) => {
  var result = await collection.insertOne({ userId, orders: [] });

  return result.acknowledged;
};

export default createItemCollection;
