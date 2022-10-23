const connectedKnex = require("./knex-connector");
const { logger } = require("../logger");
const { sendMsg } = require("../producer");
const { recieveMsg } = require("../consumer");
const uuid = require("uuid");
const config = require("config");
const sessiondata = config.get("sessionData");

const getAdmins = async(req, res) => {const admins = await connectedKnex("administrators").select("*")};

const getCustomerById = async(req, res) => {const id  = req.params.id; const customer = await connectedKnex("customers").select("*").where("id",id).first()};

const getUsers = async(req, res) => {const users = await connectedKnex("users").select("*")};

const getUserbyId = async(req, res) => {const id  = req.params.id; const user = await connectedKnex("users").select("*").where("id",id).first()};

const getData = async(req, res) => {const myUser = await connectedKnex("users").select("*").where("user_id",myUser.id).first()};

const getAirlines = async(req, res) => {const airlines = await connectedKnex("airline_companies").select("*")};

const getAirlinebyId = async(req, res) => {const id  = req.params.id; const user = await connectedKnex("airline_companies").select("*").where("id",id).first()};

const deleteCustomerById = async(req, res) => {const id = req.params.id; try{const customer = await connectedKnex("customers").customer.remove("*").where("id".id)}};

const deleteAdminById = async(req, res) => {const id = req.params.id; try{const admins = await connectedKnex("administrators").administrator.remove("*").where("id".id)}};

const deleteAirlineById = async(req, res) => {const id = req.params.id; try{const airlines = await connectedKnex("airline_companies").airlines.remove("*").where("id".id)}};

const addAdmin = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "addAdmin",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
first_name: req.body.first_name, last_name: req.body.last_name, user_name: req.body.user_name, password: req.body.password, email: req.body.email, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("admin", reqMsg);

const addAirline = async(req, res) =>{ const ResName = 'customer ${uuid.v4()}'; 
reqMsg = {operation: "addAirline",username: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).username, password: jwt.verify(await req.cookies.jwt_TOKEN, sessiondata).password,
name: req.body.name, countryId: req.body.countryId, user_name: req.body.airline_name, password: req.body.airline_password, email: req.body.email, 
queue_name: 'response ${ResName}',}
recieveMsg( reqMsg.queue,res); await sendMsg("admin", reqMsg);

const getCustomers = async(req, res) => {const customers = await connectedKnex("customers").select("customers.id", "first_name", "last_name", "address", "phone_number", "users.email", "credit_card_number",
"users.username").join("users",function(){this.on("customers.user_id", "=" ,"users.id");})};



module.exports = {getAdmins, getCustomerById, getUsers, getUserbyId, getData, getAirlines, getAirlinebyId, deleteCustomerById, deleteAdminById, 
deleteAirlineById, addAdmin, addAirline, getCustomerById, getCustomers}
