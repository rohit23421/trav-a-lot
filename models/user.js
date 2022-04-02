const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 32,
    },
    lastname: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    username: {
      type: String,
      required: true,
      maxlength: 12,
      unique: [true, "Username already taken"],
    },
    number: {
      type: Number,
      required: [true, "Please provide a number"],
    },
    photo: {
      type: String,
    },
    encry_password: {
      type: String,
      required: [true, "Please provide a password"],
      maxlength: 32,
    },
    salt: String,
    role: {
      type: String,
      default: 0,
    },
    address: [
      {
        street: {
          type: String,
          required: true,
          maxlength: 32,
        },
        locality: {
          type: String,
          maxlength: 32,
        },
        city: {
          type: String,
          required: true,
          maxlength: 32,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        postalcode: {
          type: String,
          required: true,
        },
      },
    ],
    purchases: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
