import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  originUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  hash: { type: String, required: true },
});

export const UrlModel = mongoose.model("URL", UrlSchema);
