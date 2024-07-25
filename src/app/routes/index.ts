import { Router } from 'express';
import { ProductRoutes } from '../modules/Products/product.route';
import { OrderRoutes } from '../modules/Orders/order.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/product',
        route: ProductRoutes,
    },
    {
        path: '/order',
        route: OrderRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
