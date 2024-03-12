import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

async function getBase64ImagesWithDetails(): Promise<{ name: string, price: number, description: string, image: string, amount: number }[]> {
  try {
    const products = await prisma.products.findMany({ 
      select: { 
        name: true, 
        price: true, 
        description: true, 
        amount: true,
        image: true 
      } 
    });
    return products;
  } catch (error) {
    console.error('Error fetching base64 images with details:', error);
    throw new Error('Error fetching base64 images with details');
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const productsWithDetails = await getBase64ImagesWithDetails();
      res.status(200).json(productsWithDetails);
    } catch (error) {
      console.error('Error fetching base64 images with details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

export { getBase64ImagesWithDetails };
