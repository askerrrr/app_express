import logger from "../../../logger.js";

var downloadOrderFile = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);

    return res.download(filePath);
  } catch (err) {
    logger.error({ place: "download order file", userId, err });
    return res.sendStatus(500);
  }
};

export default downloadOrderFile;
