var getOrderType = async (collection, userId, orderId) => {
  var user = await collection.findOne({ userId }).exec();

  var order = user?.orders?.find((order) => order.id == orderId);

  return order?.type;
};

export default getOrderType;
