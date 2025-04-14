var deleteUser = async (collection, userId) => {
  var result = await collection.deleteOne({ userId });

  return result.deletedCount;
};

export default deleteUser;
