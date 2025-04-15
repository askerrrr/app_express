import { Schema } from "mongoose";

var FileSchema = new Schema(
  {
    path: String,
    telegramApiFileUrl: String,
  },
  { _id: false }
);

var DescriptionSchema = new Schema(
  {
    qty: String,
    size: String,
  },
  { _id: false }
);

var OrderStatusSchema = new Schema(
  {
    id: Number,
    value: String,
  },
  { _id: false }
);

var OrderSchema = new Schema(
  {
    id: String,
    userId: String,
    userName: String,
    firstName: String,
    type: String,
    phone: String,
    date: String,
    itemUrl: String,
    orderStatus: OrderStatusSchema,
    file: FileSchema,
    description: DescriptionSchema,
  },
  { _id: false }
);

var userCollectionSchema = new Schema({
  userId: String,
  userName: String,
  firstName: String,
  orders: [OrderSchema],
});

export default userCollectionSchema;
