import mongoose from "mongoose";

import itemCollectionSchema from "../schemas/index.js";

var userDB = mongoose.createConnection("mongodb://127.0.0.1:27017/users");

var itemCollection = userDB.model("Item", itemCollectionSchema);

export default itemCollection;
