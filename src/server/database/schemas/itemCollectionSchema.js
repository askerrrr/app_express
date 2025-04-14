import { Schema } from "mongoose";

var DescriptionSchema = new Schema(
  {
    qty: String,
    size: String,
  },
  { _id: false }
);

var ItemSchema = new Schema(
  {
    id: String,
    price: String,
    purchased: Number,
    delivered: Number,
    description: DescriptionSchema,
    url: String,
  },
  { _id: false }
);

var OrdersSchema = new Schema(
  { id: String, totalSum: String, items: [ItemSchema] },
  { _id: false }
);

var itemCollectionSchema = new Schema({
  userId: String,
  orders: [OrdersSchema],
});

export default itemCollectionSchema;
