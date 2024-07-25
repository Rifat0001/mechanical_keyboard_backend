import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productService } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await productService.createProductIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully.',
    data: result,
  });
})

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productService.getAllProductFromDb(req.query);
  if (result.length === 0) {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'No Product Found! ',
      data: result,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products fetch successfully.',
      data: result,
    });
  }
})

const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await productService.getSingleProductFromDb(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fetch successfully.',
    data: result,
  });
})

const updateProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const product = req.body;
  Object.keys(product).forEach((key) => {
    if (product[key] === null || product[key] === '') {
      delete product[key];
    }
  })
  const result = await productService.updateProductIntoDb(productId, product);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully.',
    data: result,
  });
})

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await productService.deleteProductFromDb(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully.',
    data: result,
  });
})


export const productControllers = {
  createProduct, getAllProduct, getSingleProduct, deleteProduct, updateProduct
}