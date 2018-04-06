import mongoose from "mongoose";
import { mongo, env } from "./vars";

mongoose.Promise = Promise;

mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.connection.on("open", () => {
  console.error("MongoDB connected!");
});

if (env === "development") {
  mongoose.set("debug", true);
}

exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    autoIndex: true
  });
  return mongoose.connection;
};
