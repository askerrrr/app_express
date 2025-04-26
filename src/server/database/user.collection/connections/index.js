import mongoose from "mongoose";
import env from "../../../env_var.js";
import userCollectionSchema from "../schemas/index.js";

var userDB = mongoose.createConnection(env.mongo_uri, env.mongoose_options);

var userCollection = userDB.model("User", userCollectionSchema);

export default userCollection;
