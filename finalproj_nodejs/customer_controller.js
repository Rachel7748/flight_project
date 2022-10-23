const connectedKnex = require("./knex-connector");
const { logger } = require("../logger");
const { sendMsg } = require("../producer");
const { recieveMsg } = require("../consumer");
const uuid = require("uuid");
const config = require("config");
const sessiondata = config.get("sessionData");


const deleteCustomer = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; const myUser = await connectedKnex("users").select("*").where("username", req.params.user).first();
const customer = await connectedKnex("customers").select("*").where("user_id",myUser.id).first();
reqMsg = {operation: "deleteCustomer", id:customer.id, username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("customer", reqMsg);


const updateCustomer = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "updateCustomer",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
id:req.body.id, first_name:req.body.firstName, last_name:req.body.lastName, address:req.body.address, phone_number:req.body.phoneNumber, credit_card_number:req.body.creditCardNum, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("customer", reqMsg);
const sessiondata = config.get("sessionData");



const getMyTickets = async(req, res) =>{ const myUser = await connectedKnex("users").select("*").where("username", req.params.user).first();
const customer = await connectedKnex("customers").select("*").where("user_id",myUser.id).first();
const tickets = await connectedKnex("tickets").select("flights.id", "airline_companies.name", "c1.origin_country", "c2.destination_country", "flights.departure_time", "flights.landing_time")
.orderBy("flights.id","asc").where("customer_id",customer.id).join("flights",function(){this.on("flights.id","=","tickets.flight_id").join("airline_companies",function(){this.on("flights.airline_company.id","=","airline_companies.id");})
join("c1 countries",function(){this.on("flights.origin_country_id","=","c1.id").join("c2_countries",function(){this.on("flights.destination_country_id","=","c2.id");}); res.json({tickets});};


const getData = async(req, res) =>{const myUser = await connectedKnex("users").select("*").where("username",req.params.user).first(); const customer = await connectedKnex("customers").select("*").where("user_id", myUser.id).first()};



const addTicket = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "addTicket",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
flight_id: req.body.flightId, customer_id: req.body.customerId, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("customer", reqMsg);

};


module.exports = {deleteCustomer, updateCustomer, getMyTickets, getData, addTicket}








