import { Schema } from "mongoose";

import OrderSchema from "./orderSchema.js";

var userCollectionSchema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: false, default: "" },
  firstName: { type: String, required: false, default: "" },
  orders: { type: [OrderSchema], required: false },
});

export default userCollectionSchema;
