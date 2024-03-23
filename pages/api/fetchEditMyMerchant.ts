import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userParam = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;

    if (req.method === 'GET') {
        try {
            if (!userParam) {
                return res.status(400).json({ error: 'Missing user parameter' });
            }

            const user = await prisma.user.findFirst({
                where: { username: userParam },
                select: { id: true }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const products = await prisma.products.findMany({
                where: { sellerId: user.id }
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
