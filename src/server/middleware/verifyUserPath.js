var allowedPaths = ["/user/orderlist/", "/user/order/"];

var verifyUserPath = async (req, res, next) => {
  return next();
};

export default verifyUserPath;
