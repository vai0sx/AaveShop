const express = require("express");
const shopController = require("../controllers/shopController");

const router = express.Router();

router.get("/shop-details", shopController.getShopDetails);

module.exports = router;
