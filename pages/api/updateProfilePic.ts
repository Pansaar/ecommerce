import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define your API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { imageBase64 } = req.body;

      const userParam = req.query.user;
      const user = await prisma.user.findFirst({
        where: { username: userParam as string },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { profilePic: imageBase64 },
      });

      return res.status(200).json({ message: 'Profile picture updated successfully', user: updatedUser, userId: updatedUser.id });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error updating profile picture:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
