import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      const { user: authenticatedUser } = req.query;

      const userProfile = await prisma.user.findFirst({
        where: { username: authenticatedUser as string }
      });

      if (userProfile) {
        await prisma.user.update({
          where: { id: userProfile.id },
          data: { profilePic: "" }
        });
        res.status(200).json({ message: 'Profile picture deleted successfully' });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting profile picture:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
