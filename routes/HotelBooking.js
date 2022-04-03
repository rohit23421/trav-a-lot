const router = require("express").Router();

const {
  createHotelBooking,
  updateHotelBooking,
  getAllHotelBooking,
  getSingleHotelBooking,
  deleteSingleHotelBooking,
} = require("../controllers/hotelBookingController");

router.route("/hotelbooking").post(createHotelBooking);

router.route("/updatehotelbooking/:id").put(updateHotelBooking);

router.route("/singlehotelbooking/:id").get(getSingleHotelBooking);

router.route("/allhotelbooking").get(getAllHotelBooking);

router.route("/deletehotelbooking/:id").delete(deleteSingleHotelBooking);

module.exports = router;
