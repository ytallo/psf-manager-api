import express from "express";
import bodyParser from "body-parser";
import compress from "compression";
import cors from "cors";

import routes from "../api/routes";

const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.use(compress());

export default app;
