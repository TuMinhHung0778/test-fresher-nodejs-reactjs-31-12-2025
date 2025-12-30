const { Product } = require("../models");

// GET /products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: {
        model: require("../models").Category,
        attributes: ["id", "name"], // LẤY THÔNG TIN DANH MỤC
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Get products failed",
      error: error.message,
    });
  }
};

// POST /products
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /products/:id
exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });
    const updatedProduct = await Product.findByPk(req.params.id);
    res.json({ updatedProduct, message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    await product.destroy();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
