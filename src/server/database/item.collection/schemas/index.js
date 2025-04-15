import { Schema } from "mongoose";

import OrdersSchema from "./orderSchema.js";

var itemCollectionSchema = new Schema({
  userId: { type: String, required: true },
  orders: { type: [OrdersSchema], required: false },
});

export default itemCollectionSchema;
