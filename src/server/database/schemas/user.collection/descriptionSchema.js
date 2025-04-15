import { Schema } from "mongoose";

var DescriptionSchema = new Schema(
  {
    qty: { type: String, required: true, trim: true },
    size: { type: String, required: false, trim: true },
  },
  { _id: false }
);

export default DescriptionSchema;
