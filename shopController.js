const shopifyApi = require("../api/shopify");

async function getShopDetails(req, res) {
  try {
    const { accessToken } = req.body;
    const shopDetails = await shopifyApi.getShopDetails(accessToken);

    if (!shopDetails) {
      return res.status(404).json({ error: "Shop not found" });
    }

    res.status(200).json(shopDetails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shop details" });
  }
}

module.exports = {
  getShopDetails,
};
