const app = require("express")();
const logger = require("morgan");
const parsedBody = require("body-parser");
const mongoose = require("mongoose");
const router = require('./routes');

const url = "mongodb://localhost:27017/Checklist";

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
let db = mongoose.connection;

db.once("open", () => console.log("Connected to database"));
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(logger("dev"));
app.use(parsedBody.json());
app.use('/', router);

app.listen(3001, () => {
  console.log("Server is up");
});
