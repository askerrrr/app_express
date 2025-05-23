import { Schema } from "mongoose";

import ItemSchema from "./itemSchema.js";

var OrdersSchema = new Schema(
  {
    id: { type: String, required: true },
    totalSum: { type: String, required: true, min: 0 },
    items: { type: [ItemSchema], required: true },
  },
  { _id: false }
);

export default OrdersSchema;
