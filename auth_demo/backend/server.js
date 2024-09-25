const express = require("express");

// setup the dotenv package so we can access .env file variables
require("dotenv").config();

// get the mongoose package to connect with the MongoDB Atlas cluster we made
const mongoose = require("mongoose");

//this is how we access .env file vars
const port = process.env.PORT;

const app = express();

// to get request parameters
app.use(express.json());

// to get body parameters
app.use(express.urlencoded({ extended: true}));

// middleware for grabbing details of each request made
app.use((req, res, next) => {
    console.log("Request is made");
    console.log("Host name - " + req.hostname);
    console.log("Host name - " + req.path);
    console.log("Host name - " + req.method);
    next(); // to move on
});

//sample api to check
app.get("/", (req, res) => res.send("Hello World!")); 

mongoose
    .connect(process.env.MONGO_URI) //connect cluster using connection string
    .then(() => {
        console.log("MongoDB database connection established");

        //once connected, start your express server on port 4000
        app.listen(port, () => console.log(`Listening on port : ${port}!`));
    })
    .catch((err) => {
        console.log("Error connecting with the MongoDB database: " + err);
    });

const authRouter = require('./routes/authRouter');

//attach your middleware like this 
app.use("/api/user", authRouter); // /api/user will be added in every API 
