import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      // Establish a connection to the database
      await prisma.$connect();

      // Extract username and password from the request body
      const { username, password } = req.body;

      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save data to the database
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          profilePic: "",
        },
      });

      // Send a success response with the saved user data
      res.status(200).json({ message: 'User created successfully', user });
    } else {
      // Method Not Allowed
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error(error);
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}
