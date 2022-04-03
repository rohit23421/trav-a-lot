const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    photo: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    petfriendly: {
      type: Boolean,
      required: true,
    },
    carparking: {
      type: Boolean,
      required: true,
    },
    wifi: {
      type: Boolean,
      required: true,
    },
    pool: {
      type: Boolean,
      required: true,
    },
    smokingarea: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: String,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
