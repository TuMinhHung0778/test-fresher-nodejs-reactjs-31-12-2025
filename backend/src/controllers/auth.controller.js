const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

/**
 * POST /auth/register
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password, role_code, avatar } = req.body;

    // 1. Check email tồn tại
    const existedUser = await User.findOne({ where: { email } });
    if (existedUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role_code: role_code || "R3",
      avatar: avatar || "",
    });

    res.status(201).json({
      message: "Register successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_code: user.role_code,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * POST /auth/login
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // 3. Create JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role_code,
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_code: user.role_code,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
