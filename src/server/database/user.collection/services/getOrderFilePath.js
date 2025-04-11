async function getOrderFilePath(userId, orderId) {
  var { orders } = await this.findOne({ userId });

  var { file } = orders.find((order) => order.id === orderId);

  var { path } = file;

  return path;
}

export default getOrderFilePath;
