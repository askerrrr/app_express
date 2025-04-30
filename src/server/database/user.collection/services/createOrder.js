var createOrder = async (collection, order) => {
  try {
    var result = await collection.updateOne(
      { userId: order.userId },
      { $push: { orders: { ...order } } }
    );

    return result.acknowledged;
  } catch {
    var err = new Error("error creating order");
    throw err;
  }
};

export default createOrder;
