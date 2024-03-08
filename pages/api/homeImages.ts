import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { productSlide } from './homeImagesArray';

// Initialize Prisma client
const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.status(405).end('Method Not Allowed');
  }
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { index } = req.query;
    const currentIndex = parseInt(index as string, 10);

    if (currentIndex >= 0 && currentIndex < productSlide.length) {

      const imagePath = `${productSlide[currentIndex]}`;
      res.status(200).json({ imagePath });
    } else {
      res.status(404).end('Image not found');
    }
  } catch (error) {
    console.error('Error processing GET request:', error);
    res.status(500).end('Internal Server Error');
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { index } = req.body;
    const currentIndex = parseInt(index as string);

    if (currentIndex >= 0 && currentIndex < productSlide.length) {
      const imagePath = `/${productSlide[currentIndex]}`;
      res.status(200).json({ imagePath });
    } else {
      res.status(404).end('Image not found');
    }
  } catch (error) {
    console.error('Error processing POST request:', error);
    res.status(500).end('Internal Server Error');
  }
}
