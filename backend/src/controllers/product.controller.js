const { Product, Category, Sequelize } = require("../models");
const { Op } = Sequelize;

// GET /products
exports.getAllProducts = async (req, res) => {
  try {
    const { categoryId, minPrice, maxPrice, name } = req.query;

    const whereConditions = {};

    // Filter by categoryId
    if (categoryId) {
      whereConditions.categoryId = parseInt(categoryId, 10);
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      whereConditions.price = {};
      if (minPrice) whereConditions.price[Op.gte] = parseFloat(minPrice);
      if (maxPrice) whereConditions.price[Op.lte] = parseFloat(maxPrice);
    }

    // Filter by name
    if (name) {
      whereConditions.name = { [Op.like]: `%${name}%` };
    }

    // LẤY TẤT CẢ SẢN PHẨM KÈM THEO DANH MỤC VÀ ÁP DỤNG FILTERS
    const products = await Product.findAll({
      where: whereConditions,
      include: {
        model: Category,
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
    console.log("Request headers:", req.headers);
    console.log("Request body:", req.body);
    const product = await Product.create(req.body);
    console.log("Created product:", product);
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
