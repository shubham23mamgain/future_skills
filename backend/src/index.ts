import dotenv from "dotenv";
import 'express-async-errors';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from 'helmet';

import { dbConnect } from 'src/db';
import { sendErrorRes } from './utils/helper';
import cardRouter from "./routes/card";

const app = express();
dotenv.config();

dbConnect();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.use(helmet());

app.get("/", (req, res) => {
  res.redirect("/ping");
});

app.get('/ping', (req, res) => {
  res.json({ message: "Server is running correctly" })
})

app.use("/api/cards", cardRouter);


app.use(function (err, req, res, next) {
  res.status(500).json({ message: err.message });
} as express.ErrorRequestHandler);

app.use("*", (req, res) => {
  sendErrorRes(res, "Endpoint Not Found!", 404);
});
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})