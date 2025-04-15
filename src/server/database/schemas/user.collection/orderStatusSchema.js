import { Schema } from "mongoose";

var OrderStatusSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      default: 0,
      enum: [0, 1, 2, 3, 4, 5, 6],
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
