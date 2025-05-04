import mergeData from "../services/mergeData.js";
import getImageFromXLSX from "../services/getImageFromXLSX.js";

var getSheetData = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();
  var { getItemsData } = req.app.locals.itemCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);
    //"C:\\Users\\Adm\\Desktop\\264596758090.xlsx";
    var imageData = await getImageFromXLSX(filePath, userId);

    var items = await getItemsData(userId, orderId);

    var sheetData = await mergeData(items, imageData);

    return res.json({ sheetData });
  } catch (e) {
    next(e);
  }
};

export default getSheetData;
