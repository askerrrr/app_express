import mongoose from "mongoose";
import env from "../../../env_var.js";
import itemCollectionSchema from "../schemas/index.js";

var userDB = mongoose.createConnection(env.mongo_uri, env.mongoose_options);

var itemCollection = userDB.model("Item", itemCollectionSchema);

export default itemCollection;
