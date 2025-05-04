var checkOrderExists = async (collection, userId, orderId) => {
  var user = await collection.findOne({ userId });

  if (!user) {
    return false;
  }

  var result = user?.orders?.some((order) => order.id == orderId);

  return result;
};

export default checkOrderExists;
