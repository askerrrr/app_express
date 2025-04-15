var getOrders = async (collection, userId) => {
  var { orders } = await collection.findOne({ userId }).exec();

  return orders;
};

export default getOrders;
