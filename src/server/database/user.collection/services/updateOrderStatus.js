var updateOrderStatusFromDB = async (
  collection,
  userId,
  orderId,
  orderStatus
) => {
  var result = await collection.updateOne(
    { userId, "orders.id": orderId },
    {
      $set: { "orders.$.orderStatus": orderStatus },
    }
  );

  return result.acknowledged;
};

export default updateOrderStatusFromDB;
