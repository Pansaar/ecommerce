import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { category, price, description, amount } = req.body;
      const userParam = req.query.user;
      const productIdParam = req.query.productId.toString();
      const priceFloat = parseFloat(price);
      const amountFloat = parseFloat(amount)
      
      const user = await prisma.user.findFirst({
        where: { username: userParam as string },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }


      const updatedProduct = await prisma.products.update({
        where: { id: productIdParam },
        data: {
          category,
          price: priceFloat,
          description,
          amount: amountFloat
        },
      });

      return res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
