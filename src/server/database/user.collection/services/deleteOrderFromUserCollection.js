async function deleteOrderFromUserCollection(userId, orderId) {
  var result = await this.updateOne(
    { userId, "orders.id": orderId },
    {
      $pull: { orders: { id: orderId } },
    }
  );

  return result.modifiedCount;
}

export default deleteOrderFromUserCollection;
