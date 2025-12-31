const { User, Sequelize } = require("../models");
const { Op } = Sequelize;
// GET /users
exports.getAllUsers = async (req, res) => {
  try {
    const { name, email } = req.query;
    const whereConditions = {};
    // tìm kiếm gần đúng theo tên
    if (name) {
      whereConditions.name = { [Op.like]: `%${name}%` };
    }
    // tìm kiếm gần đúng theo tên người đăng ký
    if (email) {
      whereConditions.name = { [Op.like]: `%${email}%` };
    }

    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Không tìm thấy danh sách người dùng!",
      error: error.message,
    });
  }
};

// POST /users
exports.createUser = async (req, res) => {
  try {
    console.log("Request headers:", req.headers);
    console.log("Request body:", req.body);
    const user = await User.create(req.body);
    console.log("Thêm người dùng:", user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /users/:id
exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id },
    });
    const updatedUser = await User.findByPk(req.params.id);
    res.json({ updatedUser, message: "Sửa người dùng thành công!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Không tìm thấy người dùng!" });
    }
    await user.destroy();
    res.json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
