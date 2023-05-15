const axios = require("axios");

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET;
const SHOPIFY_BASE_URL = "https://YOUR_SHOP_NAME.myshopify.com/admin/api/2022-04";

async function getShopDetails(accessToken) {
  try {
    const response = await axios.get(`${SHOPIFY_BASE_URL}/shop.json`, {
      headers: {
        "X-Shopify-Access-Token": accessToken,
      },
    });
    return response.data.shop;
  } catch (error) {
    console.error("Error fetching shop details:", error);
    return null;
  }
}

module.exports = {
  getShopDetails,
};
