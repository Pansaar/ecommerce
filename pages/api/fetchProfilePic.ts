import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

// Define your API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Assuming you have a user ID
      const userId = '659ab000a596c1b169636b2c';

      // Fetch the user's profile from the database
      const userProfile = await prisma.user.findUnique({
        where: { id: userId }
      });

      // Check if the user exists
      if (userProfile) {
        // Extract the profilePic field from the userProfile
        const profilePic = userProfile.profilePic;

        // Send the profilePic in the response
        res.status(200).json({ message: 'Profile picture fetched successfully', profilePic });
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
