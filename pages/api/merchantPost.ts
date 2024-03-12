import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { imageBase64, name, price, description, amount } = req.body;
      const userParam = req.query.user;

      // Find the user
      const user = await prisma.user.findFirst({
        where: { username: userParam as string },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const product = await prisma.products.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          image: imageBase64,
          sellerId: user.id,
          amount: parseInt(amount)
        },
      });      

      return res.status(200).json({ message: 'Product added successfully', product });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
