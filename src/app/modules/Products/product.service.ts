import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// create product 
const createProductIntoDb = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
}

// Get All Product Service
const getAllProductFromDb = async (query: Record<string, unknown>) => {
  const { searchTerm, sort } = query;

  //searching
  const searchableFields = ['name', 'brand'];
  let searchQuery;

  if (searchTerm) {
    searchQuery = Product.find({
      $or: searchableFields.map((field) => ({
        [field]: { $regex: searchTerm as string, $options: 'i' },
      })),
    });
  } else {
    searchQuery = Product.find();
  }

  //sorting
  let sortOptions = {};
  if (sort === 'priceLowToHigh') {
    sortOptions = { price: 1 };
  } else if (sort === 'priceHighToLow') {
    sortOptions = { price: -1 };
  }
  // for descending order used sort natural -1 
  const result = (await searchQuery.sort({ $natural: -1 }).sort(sortOptions).exec());
  return result;
};

// get single product 
const getSingleProductFromDb = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
}

// update product 
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

// delete product 
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