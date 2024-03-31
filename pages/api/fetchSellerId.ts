import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
    const user = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
    const productId = Array.isArray(req.query.productId) ? req.query.user[0] : req.query.productId;
      const theUser = await prisma.user.findFirst({
        where: { username: user },
        select: { id: true }
      });

      if (!theUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      const product = await prisma.products.findFirst({
        where: { id: productId }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const sellerId = product.sellerId;
      return res.status(200).json({ sellerId, user: theUser.id });
    } catch (error) {
      console.error('Error fetching seller ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
