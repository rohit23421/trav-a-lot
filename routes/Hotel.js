const router = require("express").Router();
const {
  createHotel,
  updateHotel,
  getHotel,
  getAllHotels,
  deleteHotel,
} = require("../controllers/hotelController");

router.route("/createhotel").post(createHotel);
router.route("/hotelupdate/:id").put(updateHotel);
router.route("/hotelviewone/:id").get(getHotel);
router.route("/hotelsviewall").get(getAllHotels);
router.route("/hoteldeleteone/:id").delete(deleteHotel);

module.exports = router;
