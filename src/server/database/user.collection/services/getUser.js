var getUser = async function (userId) {
  return await this.findOne({ userId });
};

export default getUser;
