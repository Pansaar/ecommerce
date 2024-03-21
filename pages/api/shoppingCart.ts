import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { shopper, cart } = req.body;

      const user = await prisma.user.findUnique({
        where: { username: shopper },
        include: { shoppingCart: true }
      });
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      let shoppingCart = user.shoppingCart;
      if (!shoppingCart) {
        shoppingCart = await prisma.shoppingCart.create({
          data: {
            shopper: { connect: { username: shopper } },
            cart: []
          }
        });
      }

      const product = await prisma.products.findFirst({
        where: { id: cart }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      shoppingCart = await prisma.shoppingCart.update({
        where: { id: shoppingCart.id },
        data: {
          cart: {
            push: cart
          }
        },
      });

      return res.status(200).json({ message: 'Product added successfully', shoppingCart });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
