var getOrderStatus = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { getOrderStatus } = req.app.locals.userCollectionServices();

  try {
    var orderStatus = await getOrderStatus(userId, orderId);

    return res.json({ orderStatus });
  } catch (e) {
    next(e);
  }
};

export default getOrderStatus;
