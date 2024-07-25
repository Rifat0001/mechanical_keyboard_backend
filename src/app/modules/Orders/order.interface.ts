import { TProduct } from "../Products/product.interface";

export type TOrder = {
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
  };
  cartItems: TProduct[];
};
