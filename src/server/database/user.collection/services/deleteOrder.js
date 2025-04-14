var deleteOrder = async (collection, userId, orderId) => {
  var result = await collection.updateOne(
    { userId, "orders.id": orderId },
    {
      $pull: { orders: { id: orderId } },
    }
  );

  return result.modifiedCount;
};

export default deleteOrder;
