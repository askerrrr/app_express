import mongoose from "mongoose";
import env from "../../env_var.js";
import { DatabaseConnectionError } from "../../customError/index.js";

var mongooseConnection = async () =>
  mongoose.connect(env.mongo_uri_for_connect, env.mongoose_options);

mongoose.Promise = Promise;

mongoose.connection.on("error", () => mongoose.disconnect());

mongoose.connection.on("disconnected", () =>
  setTimeout(mongooseConnection, 5000)
);

await mongooseConnection();

var checkState = (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      next(new DatabaseConnectionError());
    }

    next();
  } catch (e) {
    if (e instanceof DatabaseConnectionError) {
      next(e);
    }

    next(new DatabaseConnectionError(e));
  }
};

export { checkState };
