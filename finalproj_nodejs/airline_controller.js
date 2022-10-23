const connectedKnex = require("./knex-connector");
const { logger } = require("../logger");
const { sendMsg } = require("../producer");
const { recieveMsg } = require("../consumer");
const uuid = require("uuid");
const config = require("config");
const sessiondata = config.get("sessionData");

const deleteAirline = async(req, res) =>{ const ResName = 'airline ${uuid.v4()}'; const myUser = await connectedKnex("users").select("*").where("username", req.params.user).first();
const airline = await connectedKnex("airline_companies").select("*").where("user_id",myUser.id).first();
reqMsg = {operation: "deleteAirline", id:airline.id, username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("airline", reqMsg);

const updateAirline = async(req, res) =>{ const ResName = 'airline ${uuid.v4()}'; 
reqMsg = {operation: "updateAirline",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
id:req.body.id, name:req.body.name, country_id:req.body.countryId, user_id:req.body.UserId, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue_name,res); await sendMsg("airline", reqMsg);


const getMyFlights = async(req, res) =>{ const myUser = await connectedKnex("users").select("*").where("username", req.params.user).first();const airline = await connectedKnex("airline_companies").select("*").where("user_id",myUser.id).first();
const flights = await connectedKnex("flights").select("flights.id","c1.origin_country","c2.destination_country","flights.departure_time","flights.landing_time","flights.remaining_tickets").orderBy("flights.id","asc").where("flights.airline_company_id",airline.id)
.join("c1 countries",function(){this.on("flights.origin_country_id", "=", "c1.id");}).join("c2 countries",function(){this.on("flights.destination_country_id", "=", "c2.id")});json({flights});};


const deleteFlight = async(req, res) =>{ const myFlight = await connectedKnex("flights").select("*").where("id", req.body.flightData.id).first();const ResName = 'airline ${uuid.v4()}';
reqMsg = {operation: "deleteFlight", id:customer.id, username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password, id:myFlight.id,
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("airline", reqMsg);

const updateFlight = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "updateFlight",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
airlineId:req.body.airlineId, flightId:req.body.airlineId, originCId:req.body.originCId, destinationCId:req.body.destinationCId, departureTime:req.body.departureTime, landingTime:req.body.landingTime, remainingTickets:req.body.remainingTickets, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("airline", reqMsg);


const addFlight = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "addFlight",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
airlineId: req.body.airlineId, originId: req.body.originId, destinationId: req.body.destinationId, departureTime: req.body.departureTime, landingTime: req.body.landingTime, remainingTickets: req.body.remainingTickets, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("airline", reqMsg);

const getData = async(req, res) =>{const myUser = await connectedKnex("users").select("*").where("username",req.params.user).first(); const airline = await connectedKnex("airline_companies").select("*").where("user_id", myUser.id).first();json({airline})};



module.exports = {deleteAirline, updateAirline, getMyFlights, deleteFlight, updateFlight, addFlight, getData}



