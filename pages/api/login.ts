// /pages/api/login.js

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Establish a connection to the database
    await prisma.$connect();

    // Extract username and password from the request body
    const { username, password } = req.body;

    // Find the user by username
    const user = await prisma.user.findFirst({
      where: { username },
    });

    // If the user is not found or the password is incorrect, return an error
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Send a success response with the user data
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}
