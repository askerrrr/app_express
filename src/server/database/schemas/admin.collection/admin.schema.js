import { Schema } from "mongoose";

var adminSchema = new Schema({
  login: String,
  passwd: String,
});

export default adminSchema;
