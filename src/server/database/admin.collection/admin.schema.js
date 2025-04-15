import { Schema } from "mongoose";

var adminSchema = new Schema({
  login: { type: String, required: true },
  passwd: { type: String, required: true },
});

export default adminSchema;
