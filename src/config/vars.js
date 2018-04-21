import dotenv from "dotenv-safe";
import path from "path";

dotenv.config();

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 3000;
export const mongo = { uri: process.env.MONGO_URI };
