const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("Loaded env PORT =", process.env.PORT);

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRoutes);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
