import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define your API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user: userParam } = req.query as { user: string };
  if (req.method === 'GET') {
    try {
      const updatedUser = await prisma.user.findFirst({
        where: { username: userParam },
      });

      if (updatedUser) {
        const profilePic = updatedUser.profilePic;
        const username = updatedUser.username
        res.status(200).json({ message: 'Profile picture fetched successfully', profilePic, username });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching profile picture:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
