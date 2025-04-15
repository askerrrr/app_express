import { Schema } from "mongoose";

import OrderSchema from "./orderSchema.js";

var userCollectionSchema = new Schema({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  orders: [OrderSchema],
});

export default userCollectionSchema;
