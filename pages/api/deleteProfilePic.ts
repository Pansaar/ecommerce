import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      // Extract the username from the query parameters
      const { user: authenticatedUser } = req.query;

      // Fetch the user's profile from the database
      const userProfile = await prisma.user.findFirst({
        where: { username: authenticatedUser as string }
      });

      // Check if the user exists
      if (userProfile) {
        // Delete the profilePic field from the userProfile
        await prisma.user.update({
          where: { id: userProfile.id },
          data: { profilePic: "" }
        });

        // Send the success response
        res.status(200).json({ message: 'Profile picture deleted successfully' });
      } else {
        // If the user does not exist, return a 404 error
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting profile picture:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // If the request method is not DELETE, return a 405 Method Not Allowed error
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
