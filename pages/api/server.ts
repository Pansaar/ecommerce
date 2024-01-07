// /pages/api/server.js
import router,{ useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Establish a connection to the database
    await prisma.$connect();

    // Extract title and body from the request body
    const { username, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Save data to the database
    const login = await prisma.login.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    // Send a success response with the saved post data
    res.status(200).json({ message: 'Post saved successfully', login });
    router.push(`/home?user=${encodeURIComponent(username)}`);
  } catch (error) {
    console.error(error);
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}
