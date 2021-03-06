import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import crudRoutes from "./routes/crudRoutes.js";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/data", crudRoutes);

const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.CONNECTION_URL
    , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT} `))
  )
  .catch((error) => console.log(error));
