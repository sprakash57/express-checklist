const mongoose = require("mongoose");
const ListSchema = new mongoose.Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
