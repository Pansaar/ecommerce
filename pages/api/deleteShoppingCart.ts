import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const userParam = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
      const productIdParam = Array.isArray(req.query.productId) ? req.query.productId[0] : req.query.productId;

      const theUser = await prisma.user.findFirst({
        where: { username: userParam },
        select: {
          id: true
        }
      });

      if (!theUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      const userWithCart = await prisma.shoppingCart.findFirst({
        where: { shopperId: theUser.id },
        select: {
          id: true,
          cart: true
        }
      });

      if (!userWithCart) {
        return res.status(404).json({ error: 'Shopping cart not found for the user' });
      }

      const updatedCart = userWithCart.cart.filter(productId => productId !== productIdParam);

      await prisma.shoppingCart.update({
        where: { id: userWithCart.id },
        data: { cart: updatedCart }
      });

      return res.status(200).json({ message: 'Product removed successfully', productId: productIdParam });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error removing product:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
