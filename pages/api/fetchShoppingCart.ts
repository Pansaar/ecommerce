import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const user = req.query.user as string;

            const theUser = await prisma.user.findFirst({
                where: { username: user },
                select: {
                    id: true
                }
            });

            if (!theUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            const userWithCart = await prisma.shoppingCart.findFirst({
                where: { shopperId: theUser.id },
                select: {
                    shopper: true,
                    cart: true
                }
            });

            if (!userWithCart) {
                return res.status(404).json({ error: 'Shopping cart not found for the user' });
            }

            const products = await Promise.all(userWithCart.cart.map(async (productId) => {
                return await prisma.products.findUnique({
                    where: { id: productId }
                });
            }));

            res.status(200).json(products);
        } catch (error) {
            console.error('Error fetching shopping cart:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
