import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";
import { productSchema } from "../Products/product.model";

const OrderSchema = new Schema<TOrder>({
  userDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  },
  cartItems: [productSchema],
});

const Order = mongoose.model<TOrder>('Order', OrderSchema);

export default Order;
