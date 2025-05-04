var downloadOrderFile = async (req, res, next) => {
  var { userId, orderId } = req.params;

  var { getOrderFilePath } = req.app.locals.userCollectionServices();

  try {
    var filePath = await getOrderFilePath(userId, orderId);

    return res.download(filePath);
  } catch (e) {
    next(e);
  }
};

export default downloadOrderFile;
