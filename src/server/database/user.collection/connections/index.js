import mongoose from "mongoose";

import userCollectionSchema from "../schemas/index.js";

var userDB = mongoose.createConnection("mongodb://127.0.0.1:27017/users");

var userCollection = userDB.model("User", userCollectionSchema);

export default userCollection;
