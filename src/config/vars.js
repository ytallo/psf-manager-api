import dotenv from "dotenv-safe";
import path from "path";

dotenv.load({
  path: path.join(__dirname, "../.env"),
  sample: path.join(__dirname, "../.env.example")
});

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;
export const mongo = { uri: process.env.MONGO_URI };
