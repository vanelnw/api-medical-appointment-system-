require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3030;

const mongoData = process.env.DATABASE_URL;
mongoose.connect(mongoData);
const dataBase = mongoose.connection;

dataBase.on("error", (error) => {
  console.log(error);
});
dataBase.once("connected", () => {
  console.log("dataBase connected");
});

const app = express();

app.use(cors());

app.use(express.json());

const routes = require("./routes/routes");

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
