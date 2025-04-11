async function deleteUserFromUserCollection(userId) {
  var result = await this.deleteOne({ userId });

  return result.deletedCount;
}

export default deleteUserFromUserCollection;
