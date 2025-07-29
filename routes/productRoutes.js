const express = require("express");
const {
  getAllProducts,
  createproduct,
  updateproduct,
  deleteproduct,
  getproductById,
} = require("../controllers/productController");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getproductById);

productRoutes.post("/products", isAuth, isAdmin, createproduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateproduct);

productRoutes.delete("/products/:id", isAuth, isAdmin, deleteproduct);

module.exports = productRoutes;
