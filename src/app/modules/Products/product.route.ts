import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidationSchema } from "./product.validation";
import { productControllers } from "./product.controller";
const router = express.Router();

router.post('/', validateRequest(productValidationSchema), productControllers.createProduct);
router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getSingleProduct);
router.patch('/:productId', productControllers.updateProduct);
router.delete('/:productId', productControllers.deleteProduct);

export const ProductRoutes = router;
