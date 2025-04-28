var checkPurchasedStatus = async (req, res) => {
  var { userId, orderId } = req.params;

  var itemCollection = req.app.locals.itemCollectionServices();

  var { items } = await itemCollection.getItemsData(userId, orderId);

  var isAllItemsIsPurchased = items.every((item) => item.purchased == 1);

  return res.json({ isAllItemsIsPurchased });
};

export default checkPurchasedStatus;
