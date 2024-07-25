import { z } from 'zod';

export const productValidationSchema = z.object({
  body: z.object({
    image: z.string().min(1, { message: 'Image is required' }),
    name: z.string().min(1, { message: 'Name is required' }).trim(),
    brand: z.string().min(1, { message: 'Brand is required' }).trim(),
    quantity: z
      .number()
      .nonnegative({ message: 'Quantity must be greater than or equal to 0' }),
    price: z
      .number()
      .nonnegative({ message: 'Price must be greater than or equal to 0' }),
    rating: z
      .number()
      .min(0, { message: 'Rating must be between 0 and 5' })
      .max(5, { message: 'Rating must be between 0 and 5' }),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .trim(),
  }),
});

