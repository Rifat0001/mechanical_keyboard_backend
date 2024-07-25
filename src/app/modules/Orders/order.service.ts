import { Product } from "../Products/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";


const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  for (const cartItem of result.cartItems) {
    await Product.findByIdAndUpdate(cartItem._id, {
      stock: cartItem.quantity - cartItem.quantity!,
    });
  }
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
