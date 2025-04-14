var getOrderFilePath = async (collection, userId, orderId) => {
  var { orders } = await collection.findOne({ userId });

  var { file } = orders.find((order) => order.id === orderId);

  var { path } = file;

  return path;
};

export default getOrderFilePath;
