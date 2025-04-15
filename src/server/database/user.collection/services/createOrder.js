var createOrder = async (collection, order) => {
  var result = await collection.updateOne(
    { userId: userId },
    { $push: { orders: { ...order } } }
  );

  return result.acknowledged;
};

export default createOrder;
