import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from 'next/router';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId: productIdParam } = req.query as { productId: string };
  console.log(productIdParam)

  if (req.method === 'GET') {
    try {
      const product = await prisma.products.findFirst({ 
        where: { id: productIdParam as string }
      });
      
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
