import { Schema } from "mongoose";

import FileSchema from "./fileSchema.js";
import DescriptionSchema from "./descriptionSchema.js";
import OrderStatusSchema from "./orderStatusSchema.js";

var OrderSchema = new Schema(
  {
    id: { type: String, required: true },

    userId: { type: String, required: true },

    userName: { type: String, required: false, default: "" },

    firstName: { type: String, required: false, default: "" },

    type: { type: String, required: true, enum: ["single", "multiple"] },

    phone: { type: String, required: true },

    date: { type: String, required: true },

    itemUrl: { type: String, required: false },

    orderStatus: { type: OrderStatusSchema, required: true },

    file: { type: FileSchema, required: true },

    description: {
      type: DescriptionSchema,
      required: false,
    },
  },
  { _id: false }
);

export default OrderSchema;
