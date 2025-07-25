const product = require("../models/Product");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
const getproductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
const createproduct = async (req, res) => {
  try {
    const productData = req.body;
    const newproduct = await product.create(productData);

    res.status(201).json({
      message: "product created",
      product: newproduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const updateproduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;

    const product = await product.findByIdAndupdate(productId, productData, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    res.json({
      message: "product updated",
      product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const deleteproduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await product.findByIdAnddelete(productId);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    res.json({
      message: "product deleted",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

module.exports = {
  getAllProducts,
  getproductById,
  createproduct,
  updateproduct,
  deleteproduct,
};
