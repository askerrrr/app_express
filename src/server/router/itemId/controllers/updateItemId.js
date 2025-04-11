import logger from "../../../logger.js";

var updateItemId = async (req, res) => {
  var { userId, orderId, itemId, index } = req.body;

  var { updateItemId } = req.app.locals.itemCollectionServices();

  try {
    var successfullUpdate = await updateItemId(userId, orderId, index, itemId);

    return successfullUpdate ? res.sendStatus(200) : res.sendStatus(304);
  } catch (err) {
    logger.error({ place: "change item id", userId, err });
    return res.status(500);
  }
};

export default updateItemId;
