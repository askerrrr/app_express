import logger from "../../../logger.js";
import updateItemIdInArray from "../services/updateItemIdInArray.js";

var updateItemId = async (req, res) => {
  var { userId, orderId, itemId, index } = req.body;

  var { getItemsData, updateItemId } = req.app.locals.itemCollectionServices();

  try {
    var { items } = await getItemsData(userId, orderId);

    var updatedItems = await updateItemIdInArray(index, itemId, items);

    var successfullUpdate = await updateItemId(userId, orderId, updatedItems);

    return successfullUpdate ? res.sendStatus(200) : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "change item id", userId, err });
    return res.status(500);
  }
};

export default updateItemId;
