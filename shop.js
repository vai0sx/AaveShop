const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopifyDomain: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
