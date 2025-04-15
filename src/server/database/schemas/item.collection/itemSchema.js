import { Schema } from "mongoose";

import DescriptionSchema from "../user.collection/descriptionSchema.js";

var ItemSchema = new Schema(
  {
    id: { type: String, required: true },
    price: { type: String, required: true },
    purchased: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 0,
    },
    delivered: {
      type: Number,
      required: true,
      enum: [0, 1],
      default: 0,
    },
    description: DescriptionSchema,
    url: { type: String, required: true, trim: true },
  },
  { _id: false }
);

export default ItemSchema;
