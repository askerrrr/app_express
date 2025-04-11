async function deleteUserFromItemCollection(userId) {
  var result = await this.deleteOne({ userId });

  return result.deletedCount;
}

export default deleteUserFromItemCollection;
