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

  return result.modifiedCount == 1;
};

export default updateOrderStatusFromDB;
