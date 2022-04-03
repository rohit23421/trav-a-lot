const mongoose = require("mongoose");

const hotelbookingSchema = new mongoose.Schema(
  {
    hotelname: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    fromdate: {
      type: Date,
      required: true,
    },
    todate: {
      type: Date,
      required: true,
    },
    guests: [
      {
        adult: {
          type: Number,
          default: 0,
        },
        children: {
          type: Number,
          default: 0,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HotelBooking", hotelbookingSchema);
