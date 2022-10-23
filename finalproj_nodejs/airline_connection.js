const {Router} = require("express");
const router = Router();
const {updateAirline, getFlights, getData, deleteFlight, addFlight, deleteAirline, updateFlight} = require("../controllers/airline_controller");

router .route("/flights/:user").get(getFlights).post(addFlight).delete(deleteFlight).put(updateFlight);
router. route("/:user").get(getData).put(updateAirline).delete(deleteAirline);

module.exports = router;





