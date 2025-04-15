import mongoose from "mongoose";

import adminSchema from "./admin.schema.js";

var adminDB = mongoose.createConnection("mongodb://127.0.0.1:27017/admin");

var adminCollection = adminDB.model("Admin", adminSchema);

export default adminCollection;
