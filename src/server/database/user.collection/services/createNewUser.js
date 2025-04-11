async function createNewUser(data) {
  var result = await this.insertOne({
    userId: data.userId,
    firstName: data.firstName,
    userName: data.userName,
    orders: [],
  });

  return result.acknowledged;
}

export default createNewUser;
