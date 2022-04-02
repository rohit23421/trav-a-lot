const router = require("express").Router();
const {
  createHotel,
  updateHotel,
  getHotel,
  getAllHotels,
} = require("../controllers/hotelController");

router.route("/createhotel").post(createHotel);
router.route("/hotelupdate/:id").put(updateHotel);
router.route("/hotelviewone/:id").get(getHotel);
router.route("/hotelsviewall").get(getAllHotels);

module.exports = router;
