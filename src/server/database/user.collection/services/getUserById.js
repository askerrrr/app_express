var getUserById = async (collection, userId) =>
  await collection.findOne({ userId }).exec();

export default getUserById;
