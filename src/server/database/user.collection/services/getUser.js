var getUser = async (collection, userId) =>
  await collection.findOne({ userId });

export default getUser;
