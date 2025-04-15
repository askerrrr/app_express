var getUser = async (collection, userId) =>
  await collection.findOne({ userId }).exec();

export default getUser;
