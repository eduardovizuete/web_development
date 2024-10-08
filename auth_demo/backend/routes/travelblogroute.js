const requireAuth = require("../middleware/requireAuth");
//keep the routes authenticated first
router.use(requireAuth); //<----keep this at top to verify the token

//now all the subsequent api will also receive the req.user parameter we created
//add card
router.get("/payment", showPaymentDetail);

router.get("/cart", showCart); 