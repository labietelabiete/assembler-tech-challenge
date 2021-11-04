const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const gifSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    url: {
      type: String,
      trim: true,
      required: [true, "Url is required"],
      validate: {
        validator: (value) => validator.isURL(value),
        message: () => `URL is not valid`,
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "UserId is required"],
    },
  },

  {
    strict: false,
    timestamps: true,
  },
);

const Gif = mongoose.model("gifs", gifSchema);

module.exports = Gif;
