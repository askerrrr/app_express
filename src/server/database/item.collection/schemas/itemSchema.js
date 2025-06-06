import { Schema } from "mongoose";

import DescriptionSchema from "../../user.collection/schemas/descriptionSchema.js";

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
    description: { type: DescriptionSchema, required: true },
    url: { type: String, required: true, trim: true },
    img: { type: String, required: false },
  },
  { _id: false }
);

export default ItemSchema;
