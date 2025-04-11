import logger from "../../../logger.js";

var sendImage = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);

    return res.sendFile(filePath);
  } catch (err) {
    logger.error({ place: "getting image", userId, err });
    return res.status(500);
  }
};

export default sendImage;
