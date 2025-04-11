async function createNewOrder(order) {
  var result = await this.updateOne(
    { userId: userId },
    { $push: { orders: { ...order } } }
  );

  return result.modifiedCount;
}
export default createNewOrder;
