import { Schema } from "mongoose";

var FileSchema = new Schema(
  {
    path: { type: String, required: true },
    telegramApiFileUrl: { type: String, required: true },
  },
  { _id: false }
);

export default FileSchema;
