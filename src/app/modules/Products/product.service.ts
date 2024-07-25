import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
}

const getAllProductFromDb = async () => {
  const result = await Product.find();
  return result;
}

const getSingleProductFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
}

const updateProductIntoDb = async (productId: string, product: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { $set: product },
    {
      new: true,
    },
  );
  return result;
}

const deleteProductFromDb = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
}

export const productService = {
  createProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
  updateProductIntoDb,
  deleteProductFromDb
}