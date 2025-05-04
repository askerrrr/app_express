import updateItemIdInArray from "../services/updateItemIdInArray.js";

var updateItemId = async (req, res, next) => {
  var { userId, orderId, itemId, index } = req.body;

  var itemCollection = req.app.locals.itemCollectionServices();

  try {
    var { items } = await itemCollection.getItemsData(userId, orderId);

    var updatedItems = await updateItemIdInArray(index, itemId, items);

    var successfullUpdate = await itemCollection.updateItemId(
      userId,
      orderId,
      updatedItems
    );

    return successfullUpdate ? res.sendStatus(200) : res.sendStatus(304);
  } catch (e) {
    next(e);
  }
};

export default updateItemId;
