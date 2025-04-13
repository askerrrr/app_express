import logger from "../../../logger.js";
import mergeData from "../services/mergeData.js";
import getImageFromXLSX from "../services/getImageFromXLSX.js";

var getSheetData = async (req, res) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();
  var { getItemsData } = req.app.locals.itemCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);

    var imageData = await getImageFromXLSX(filePath, userId);

    var items = await getItemsData(userId, orderId);

    var sheetData = await mergeData(items, imageData);

    return res.json({ sheetData });
  } catch (err) {
    logger.error({ place: "getting xlsx data", userId, err });
    return res.status(500);
  }
};

export default getSheetData;
