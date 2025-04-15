import { Schema } from "mongoose";

import FileSchema from "./fileSchema.js";
import DescriptionSchema from "./descriptionSchema.js";
import OrderStatusSchema from "./orderStatusSchema.js";

var OrderSchema = new Schema(
  {
    id: { type: String, required: true },
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    type: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    itemUrl: { type: String, required: false },
    orderStatus: OrderStatusSchema,
    file: FileSchema,
    description: DescriptionSchema,
  },
  { _id: false }
);

export default OrderSchema;
