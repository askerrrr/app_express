import mongoose from "mongoose";
import env from "../../env_var.js";
import adminSchema from "./admin.schema.js";

var adminDB = mongoose.createConnection(
  env.mongo_uri_for_connect,
  env.mongoose_options
);

var adminCollection = adminDB.model("Admin", adminSchema);

export default adminCollection;
