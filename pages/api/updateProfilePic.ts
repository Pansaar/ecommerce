import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define your API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { imageBase64 } = req.body; 

      const userId = '659ab000a596c1b169636b2c';

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { profilePic: imageBase64 },
      });

      res.status(200).json({ message: 'Profile picture updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating profile picture:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
