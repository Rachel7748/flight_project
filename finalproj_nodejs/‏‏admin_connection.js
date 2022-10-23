const {Router} = require("express");
const router = Router();
const {addCustomer, getAllFlights, getFlightById} = require("../controllers/anonymous_controller");
const  {updateCustomer} = require ("../controllers/customer_controller");
const {updateFlight, updateAirline, deleteCustomer, getCustomers, getCustomerById, getAdmins, getData, deleteAdminById,  addAdmin, getAirlines,
getAirlineById, deleteAirline, addAirline, getUserById, getUsers, deleteFlight} = require("../controllers/admin_controller");
router .route("/airlines/:id").get(getAirlineById).delete(deleteAirline).put(updateAirline);
router .route("/customers/:id").get(getCustomerById).delete(deleteCustomer).put(updateCustomer);
router .route("/flights/:id").get(getFlightById).delete(deleteFlight).put(updateFlight);
router .route("/user/:id").get(getUserById);router .route("/airlines/:id").get(getAirlines).post(addAirline);router .route("/customers/:id").get(getCustomers).post(addCustomer)
router .route("/flights/:id").get(getAllFlights);router .route("/users/:id").get(getUsers);router .route("/").get(getAdmins).post(addAdmin);

module.exports = router;




