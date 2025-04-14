var getOrders = async (collection, userId) => {
  var { orders } = await collection.findOne({ userId });

  return orders;
};

export default getOrders;
