import mongoose from "mongoose";
import env from "../../env_var.js";

var mongooseConnection = async () => {
  var userDB = mongoose.connect(
    env.mongo_uri_for_connect,
    env.mongoose_options
  );

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
    console.log("err: ", err);
    next(err);
  }

  next();
};

export { checkState };
