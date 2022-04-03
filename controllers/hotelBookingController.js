const HotelBooking = require("../models/booking");

//CREATE BOOKING
exports.createHotelBooking = async (req, res) => {
  const newBooking = new HotelBooking(req.body);
  try {
    const savedBooking = await newBooking.save();
    return res.status(200).json({
      success: true,
      savedBooking,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN CREATING A HOTEL BOOKING",
      error,
    });
  }
};

exports.updateHotelBooking = async (req, res) => {
  try {
    const updatedBooking = await HotelBooking.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      updatedBooking,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN UPDATING HOTEL BOOKING",
      error,
    });
  }
};

exports.getSingleHotelBooking = async (req, res) => {
  try {
    const singleHotelBooking = await HotelBooking.findById(req.params.id);
    return res.status(200).json({
      success: true,
      singleHotelBooking,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING SINGLE HOTEL BOOKING",
      error,
    });
  }
};

exports.getAllHotelBooking = async (req, res) => {
  try {
    const allHotelBookings = await HotelBooking.find().sort({ _id: -1 });
    return res.status(200).json({
      success: true,
      allHotelBookings,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING ALL HOTEL BOOKINGS",
      error,
    });
  }
};

exports.deleteSingleHotelBooking = async (req, res) => {
  try {
    await HotelBooking.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "HOTEL BOOKING DELETED SUCCESSFULLY",
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN DELETING SINGLE HOTEL BOOKING",
      error,
    });
  }
};
