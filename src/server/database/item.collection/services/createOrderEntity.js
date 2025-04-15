var createOrderEntity = async (collection, userId, orderId) => {
  var result = await collection.updateOne(
    { userId },
    {
      $push: { orders: { id: orderId, totalSum: "", items: [] } },
    }
  );

  return result.acknowledged;
};

export default createOrderEntity;
