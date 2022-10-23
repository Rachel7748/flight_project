const cors = require("cors");
const config = require("config");
const port = config.get("port");
const express = require("express")
const mongoose = require("mongoose");
const {logger} = require("./logger");
const cookieParser = require('cookie-parser');
const adminRoutes = require("./routes/adminRoutes");
const airlineRoutes = require("./routes/airlineRoutes");
const anonymousRoutes = require("./routes/anonymousRoutes");
const customerRoutes = require("./routes/customerRoutes");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express(); 

// middleware

app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use("/admins",adminRoutes,requireAuth);
app.use("/airlines",airlineRoutes,requireAuth);
app.use("/customers",customerRoutes,requireAuth);
app.use(anonymousRoutes);

//mongodb con

const dbURI = config.get("mongo");

mongoose.connect(dbURI.conn_str, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log(result.connection)    
    app.listen(port.listening, () => logger.info('listening to http://localhost:${port.listening}'));
  })
  .catch((err) => logger.info(err));

// routes

app.get("*", checkUser,requireAuth)
app.get("/", requireAuth, (req, res) => res.status(200).render("index"));

