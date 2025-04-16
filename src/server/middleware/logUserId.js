var logUserId = async (req, res, next) => {
  console.log("log", req.user);
  next();
};

export default logUserId;
