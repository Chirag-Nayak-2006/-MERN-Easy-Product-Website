import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product Id" });
  }
  try {
    await Product.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ success: true, message: "Sucessfully Deleted Product" });
  } catch (error) {
    console.error("Error in Deleteing Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}; // the delete req returns 200 OK status everytime you run the delete with the same id, even though that id is nolonger in the database ot delete, this is because delete is an idempotent operation, once it returns one value, it shoudl retunr same value for the same id everytime

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in getting all products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid Product Id" });
  }

  try {
    // by default this method returns old product, but new:true makes it so that it returns the new object
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Failed to update Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
