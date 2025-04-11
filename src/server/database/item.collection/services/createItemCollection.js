async function createItemCollection({ userId }) {
  var result = await this.insertOne({ userId, orders: [] });

  return result.acknowledged;
}

export default createItemCollection;
