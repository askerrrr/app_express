import { Schema } from "mongoose";

var OrderStatusSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 6,
    },
    value: {
      type: String,
      required: true,
      default: "not-accepted-for-processing",
      enum: [
        "not-accepted-for-processing",
        "in-processing",
        "purchased",
        "china-warehouse",
        "on-the-way",
        "awaiting-receipt",
        "order-is-completed",
      ],
    },
  },
  { _id: false }
);

export default OrderStatusSchema;
