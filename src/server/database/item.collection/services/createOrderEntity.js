async function createOrderEntity(userId, orderId) {
  var result = await this.updateOne(
    { userId },
    {
      $push: { orders: { id: orderId, totalSum: "", items: [] } },
    }
  );

  return result.modifiedCount == 1;
}

export default createOrderEntity;
