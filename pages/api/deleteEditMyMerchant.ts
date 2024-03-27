import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userParam = req.query.user as string;
    const productIdParam = req.query.productId as string;

    if (req.method === 'DELETE') {
        try {
            const userProfile = await prisma.user.findFirst({
                where: { username: userParam }
            });

            if (userProfile) {
                const deletedProduct = await prisma.products.delete({
                    where: { id: productIdParam }
                });

                res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
