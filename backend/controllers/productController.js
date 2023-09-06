import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Resource not found");
});

const getProductBySex = asyncHandler(async (req, res) => {
  const { sex } = req.params;
  const products = await Product.find({ sex });

  if (products) {
    return res.json(products);
  }
  res.status(404);
  throw new Error("Resource not found");
});

export { getProducts, getProductById, getProductBySex };
