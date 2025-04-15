var deleteUser = async (collection, userId) => {
  var result = await collection.deleteOne({ userId });

  return result.acknowledged;
};

export default deleteUser;
