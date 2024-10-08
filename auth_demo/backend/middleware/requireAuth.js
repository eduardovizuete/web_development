//requireAuth.js <--- a middleware to verify if requests are authorized
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// this middleware will run first before any request to verify the token
const requireAuth = async (req, res, next) => {
    //every request will send the token with them like - 
    // fetch('/api/user/payment', {
    //   method:'GET',
    //   headers:{
    //     Authorization: `Bearer ${token}`,  <----send the token whenever fetching secure APIs
    //     'Content-Type': 'application/json'
    //   }
    // })
    const { authorization } = req.headers;  //grab the authorization header

    if (!authorization) {
        res.status(401).json({ error: "Authorization token required" });
    }

    console.log("Authorization token = " + authorization);

    //get the token and ignore the "Bearer" string
    const token = authorization.split(" ")[1];

    try {
        //this is where JWT verifies the token and return the ID of user if successful
        const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
        // you can search the database to get the user object and create a new 
        //request parameter with "user" which will be supplied to every other request down the tree(see next code)
        req.user = await User.findOne({ _id }).select("_id");
        next();  // to move on to next request 
    } catch (error) {
        res.status(401).json({ error });
    }
};

module.exports = requireAuth;