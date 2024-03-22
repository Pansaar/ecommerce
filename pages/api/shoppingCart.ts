import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const userParam = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
      const productIdParam = Array.isArray(req.query.productId) ? req.query.productId[0] : req.query.productId;

      const user = await prisma.user.findUnique({
        where: { username: userParam },
        include: { shoppingCart: true }
      });
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      let shoppingCart = user.shoppingCart;
      if (!shoppingCart) {
        shoppingCart = await prisma.shoppingCart.create({
          data: {
            shopper: { connect: { username: userParam } },
            cart: []
          }
        });
      }

      const product = await prisma.products.findFirst({
        where: { id: productIdParam }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      shoppingCart = await prisma.shoppingCart.update({
        where: { id: shoppingCart.id },
        data: {
          cart: {
            push: productIdParam
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
