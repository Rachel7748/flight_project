const connectedKnex = require("./knex-connector");
const { logger } = require("./logger");
const { sendMsg } = require("./producer");
const { recieveMsg } = require("./consumer");
const uuid = require("uuid");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//json web token

const createToken = (id) => {return jwt.sign({id},"personal key")}
const Login = async(req, res) =>{const{username, password} = req.body}

const addCustomer = async(req,res) => {const qResName = 'customer$1{uuid.v4()}';
const{username, password, email, firstName, lastName, address, phone_number, ccn} = req.body

const getAllFlights = async(req,res) =>{const flights = await connectedKnex("flights").select(
    "flights.id", "airline_companies.name", "c1.name as origin_country", "c2.name as destination_country","flights.departure_time", "flight.landing_time", "flights.remaining_tickets"
).orderBy("flights.id",asc).join("countries as C1", function(){this.on("flights.origin_country_id","=","c1.id");})
.join("countries as C2", function(){this.on("flights.origin_country_id","=","c2.id");})
.join("airline_companies", function(){this.on("flights.airline_company_id","=","airline_companies.id");});

const getFlightById = async(req,res) =>{const id = req.params.id; const flight = await connectedKnex("flights").select("flight.id", "airline_companies.airline name", "c1.origin_country_name",
"c2.destination_country_name","flights.departure_time", "flights.landing_time", "flights.remaining_tickets").where("flights.id", id).join("c1 countries", function(){this.on("flights.origin_country_id", "=" ,"c1.id");})
.join("c2 countries", function(){this.on("flights.origin_country_id", "=" ,"c2.id")}.join("airline_companies", function(){this.on("flights.airline_company_id","=", "airline_companies.id");});

const getFlightByCountries = async (req,res) =>{const originId = req.params.origin; {const destinationId = req.params.destination; const flight = await connectedKnex("flights")
.select("flights.id", "airline_companies.airline name", "c1.origin_country_name","c2.destination_country_name","flights.departure_time", "flights.landing_time", "flights.remaining_tickets").where("flights.origin_country_id", originId)
.where("flights.destination_country_id",destinationId).join("c1 countries", function(){this.on("flights.origin_country_id", "=" ,"c1.id");})
.join("c2 countries", function(){this.on("flights.destination_country_id", "=" ,"c2.id")}.join("airline_companies", function(){this.on("flights.airline_company_id","=", "airline_companies.id");});

const getAllCountries = async(req,res) =>{const countries = await connectedKnex("countries").select("id","name").orderBy("name","asc");};

module .exports = {Login, addCustomer, getAllFlights, getFlightById, getFlightByCountries, getAllCountries;}
