async function updateOrderStatusFromDB(userId, orderId, newOrderStatus) {
  var result = await this.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.orderStatus": newOrderStatus },
    }
  );

  return result.modifiedCount == 1;
}

export default updateOrderStatusFromDB;
