import checkFileExists from "../services/checkFileExists.js";

var checkFileExist = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);
    //"C:\\Users\\Adm\\Desktop\\264596758090.xlsx";
    var fileIsExists = await checkFileExists(filePath);

    return res.json({ fileIsExists });
  } catch (e) {
    next(e);
  }
};

export default checkFileExist;
