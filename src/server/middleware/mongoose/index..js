import mongoose from "mongoose";

var mongooseConnection = async () => {
  var userDB = mongoose.connect("mongodb://127.0.0.1:27017/users");

  userDB.then(() => console.log("mongoose is connected"));
};

mongoose.Promise = Promise;

mongoose.connection.on("error", () => mongoose.disconnect());

mongoose.connection.on("disconnected", () =>
  setTimeout(mongooseConnection, 5000)
);

await mongooseConnection();

var checkState = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    var err = new Error("Database connection is not established");
    err.status = 500;

    next(err);
  }

  next();
};

export { checkState };
