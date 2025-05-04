var getCompletedOrdersData = async (req, res, next) => {
  var { userId } = req.params;

  var { getCompletedOrders } = req.app.locals.userCollectionServices();

  try {
    var completedOrders = await getCompletedOrders(userId);

    return res.json({ userId, completedOrders });
  } catch (e) {
    next(e);
  }
};

export default getCompletedOrdersData;
