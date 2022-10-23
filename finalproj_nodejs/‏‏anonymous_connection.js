const {Router} = require("express");
const router = Router();
const {Logout, Login, LoginCheck, addCustomer, getAllFlights, getFlightById, getCountries, getFlightByCountries, getFlightByDeparture, getFlightByLanding} = require("../controllers/anonymous_controller");
const  {updateCustomer} = require ("../controllers/anonymous_controller");

router .route("/flights/depfilter").post(getFlightByDeparture);router .route("/flights/lanfilter").post(getFlightByLanding);
router .route("/flights/:origin/:destination").get(getFlightByCountries);router .route("/flights/:id").get(getFlightById);router .route("/countries").get(getCountries);router .route("/flights").get(getAllFlights);
router .route("/login").post(Login).get(LoginCheck);router .route("/logout").get(Logout);router .route("/").post(addCustomer);

module.exports = router;


