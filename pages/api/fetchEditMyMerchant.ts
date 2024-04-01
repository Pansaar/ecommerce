import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const user = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
            if (!user) {
                return res.status(400).json({ error: 'Missing user parameter' });
            }

            const userRecord = await prisma.user.findFirst({
                where: { username: user },
                select: { id: true },
            });

            if (!userRecord) {
                return res.status(404).json({ error: 'User not found' });
            }

            const products = await prisma.products.findMany({
                where: { sellerId: userRecord.id },
            });

            res.status(200).json(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
