async function getItemsData(userId, orderId) {
  var { orders } = await this.findOne({ userId });

  var { items, totalSum } = orders.find((order) => order.id == orderId);

  return { items, totalSum };
}
export default getItemsData;
