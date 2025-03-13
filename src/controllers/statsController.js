import User from '../models/userModel.js';
import Product from '../models/productModel.js';

export const getCounts = async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    const userCount = await User.countDocuments();
    res.json({ products: productCount, users: userCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};