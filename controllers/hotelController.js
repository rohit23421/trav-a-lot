const Hotel = require("../models/hotel");

//CREATE HOTEL VIEW
exports.createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    return res.status(200).json({
      success: true,
      savedHotel,
    });
  } catch (error) {
    res.status(400).json({
      message: "ERROR IN CREATING HOTEL_VIEW",
      error,
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      updatedHotel,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN UPDATING HOTEL",
      error,
    });
  }
};

//DELETE HOTEL
exports.deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "HOTEL DELETED SUCCESSFULLY",
    });
  } catch (error) {
    res.status(400).json({
      message: "ERROR IN DELETING HOTEL",
      error,
    });
  }
};

//GET HOTEL
exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    return res.status(200).json({
      success: true,
      hotel,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING SINGLE HOTEL",
      hotel,
    });
  }
};

//GET ALL HOTELS
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().sort({ _id: -1 });
    return res.status(200).json({
      success: true,
      hotels,
    });
  } catch (error) {
    return res.status(400).json({
      message: "ERROR IN GETTING ALL HOTELS",
      error,
    });
  }
};
