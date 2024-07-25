import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

export const productSchema = new Schema<TProduct>({
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: 0,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 0,
    max: 5,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
});

export const Product = model<TProduct>('Product', productSchema);