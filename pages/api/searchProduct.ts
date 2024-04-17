import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const searchParam = req.query.result as string;

      const allProducts = await prisma.products.findMany();

      const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchParam.toLowerCase())
      );

      res.status(200).json(filteredProducts);
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
