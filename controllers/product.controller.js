const Product = require('../models/product.model');

getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports={getAllProducts}

