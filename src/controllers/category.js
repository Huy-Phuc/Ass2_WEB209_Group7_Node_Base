import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json({ data: newCategory });
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const allCategory = await Category.find();
    return res.status(201).json({ success: true, data: allCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getByIdCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await Category.findById(id);
    return res.status(201).json({ data: getById });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteCategory = await Category.findByIdAndDelete(id);
    return res.status(201).json({ data: deleteCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(201).json({ data: updateCategory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
