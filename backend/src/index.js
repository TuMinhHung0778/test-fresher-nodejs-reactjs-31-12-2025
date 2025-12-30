const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
require("dotenv").config();
console.log("Loaded env PORT =", process.env.PORT);

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
