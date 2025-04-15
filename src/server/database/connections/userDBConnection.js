import mongoose from "mongoose";
import userCollectionSchema from "../schemas/user.collection/index.js";
import itemCollectionSchema from '../schemas/item.collection/index.js'

var userDB = mongoose.createConnection("mongodb://127.0.0.1:27017/users");

var userCollection = userDB.model("User", userCollectionSchema);

var itemCollection = userDB.model("Item", itemCollectionSchema);

export { itemCollection, userCollection };
