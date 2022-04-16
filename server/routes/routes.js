const express = require('express');
const app = express();
const router = express.Router();
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../controllers/verifyToken");

const auth =  require('../controllers/auth');
const user =  require('../controllers/user');
const prod =  require('../controllers/product');
const order = require('../controllers/order');

// API ROUTES

router.put("/api/user/:id", verifyTokenAndAuthorization, user.updatedUser);
router.delete("/api/user/:id", verifyTokenAndAuthorization, user.deleteUser);
router.get("/api/user/find/:id", verifyTokenAndAdmin, user.getById);
router.get("/api/user/", verifyTokenAndAdmin, user.getAllUser);
router.get("/api/user/stats", verifyTokenAndAdmin, user.getUserStat);


router.post("/api/prod/", verifyTokenAndAdmin, prod.createProd);
router.put("/api/prod/:id", verifyTokenAndAdmin, prod.updateProd);
router.delete("/api/prod/:id", verifyTokenAndAdmin, prod.deleteProd);
router.get("/api/prod/find/:id", prod.getById);
router.get("/api/prod/", prod.getAllProd);


router.post("/api/order/", verifyToken, order.createOrder);
router.put("/api/order/:id", verifyTokenAndAdmin, order.updateOrder);
router.delete("/api/order/:id", verifyTokenAndAdmin, order.deleteOrder);






// Auth routes
router.post("/register", auth.register);
router.post("/login", auth.login);




module.exports = router