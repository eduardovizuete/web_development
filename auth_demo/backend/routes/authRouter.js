const express = require("express");

const { user_signup, user_login } = require("../controllers/userController");

//set up a router which we can pass in the server.js file
const router = express.Router();

// api user login
// router.post("/login", async (req, res) => {
//     console.log("Logging in ...");
//     const body = req.body;
//     res.status(200).json(body);
// });

router.post("/login", user_login);

// api user signup
// router.post("/signup", async (req, res) => {
//     console.log("Signing up ...");
//     const body = req.body;
//     res.status(200).json(body);
// });

router.post("/signup", user_signup);

module.exports = router;