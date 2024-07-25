import cors from 'cors';
import express, { Application, Request, Response, NextFunction } from 'express';
import router from './app/routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);
// Default route
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to the Ecommerce Api Service',
  });
});

// Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
