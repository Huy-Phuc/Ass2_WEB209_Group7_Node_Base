import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    // const newProduct = new Product({ title, price, description });
    // await newProduct.save();
    console.log("Request body:", req.body);
    const newProduct = await Product.create(req.body);
    return res.status(201).json({ data: newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const allProduct = await Product.find();
    return res.status(201).json({ success: true, data: allProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getByIdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await Product.findById(id);
    return res.status(201).json({ data: getById });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await Product.findByIdAndDelete(id);
    return res.status(201).json({ data: deleteProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(201).json({ data: updateProduct });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
