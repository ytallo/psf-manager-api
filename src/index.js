Promise = require("bluebird");
import { port, env } from "./config/vars";
import app from "./config/express";
import mongoose from "./config/mongoose";

mongoose.connect();

app.listen(port, () => {
  console.log(`Listening at ${port} (${env})`);
});

export default app;
