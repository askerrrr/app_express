var checkPurchasedStatus = async (req, res, next) => {
  try {
    var { userId, orderId } = req.params;

    var { getItemsData } = req.app.locals.itemCollectionServices();

    var { items } = await getItemsData(userId, orderId);

    var isAllItemsIsPurchased = items.every((item) => item.purchased == 1);

    return res.json({ isAllItemsIsPurchased });
  } catch (e) {
    e.origin = checkPurchasedStatus.name;

    next(e);
  }
};

export default checkPurchasedStatus;
