import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient()

async function getBase64Images(): Promise<string[]> {
    try {
      const images = await prisma.products.findMany({ select: { image: true } });
      const base64Images = images.map((image) => image.image);
      return base64Images;
    } catch (error) {
      console.error('Error fetching base64 images:', error);
      return [];
    }
  }

  export default async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
    try {
      const base64Images = await getBase64Images();
      res.status(200).json({ base64Images });
    } catch (error) {
      console.error('Error fetching base64 images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  export { getBase64Images };