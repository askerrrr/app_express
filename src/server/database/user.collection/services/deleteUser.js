var deleteUser = async (collection, userId) => {
  try {
    var result = await collection.deleteOne({ userId });

    return result.acknowledged;
  } catch {
    var err = new Error("error deleting user");
    throw err;
  }
};

export default deleteUser;
