const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "A photo must have url"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
