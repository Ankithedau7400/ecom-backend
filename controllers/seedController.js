import Product from "../models/productModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

export const seed = async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);

  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
};
