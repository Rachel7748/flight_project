const {Router} = require("express");
const router = Router();
const {deleteCustomer, updateCustomer, getData, addTicket, getMyTickets} = require("../controllers/customer_controller");

router .route("/tickets/:user").get(getMyTickets).post(addTicket);
router. route("/:user").delete(deleteCustomer).put(updateCustomer).get(getData);

module.exports = router;





