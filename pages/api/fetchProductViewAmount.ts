import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const user = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
            const productIdParam = Array.isArray(req.query.productId) ? req.query.productId[0] : req.query.productId;
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
                    cart: {
                        include: {
                            shoppingCart: true
                        }
                    }
                }
            });

            if (!userWithCart) {
                return res.status(404).json({ error: 'Shopping cart not found for the user' });
            }

            const shoppingCartWithUserId = await prisma.shoppingCart.findFirst({
                where: {
                    shopperId: theUser.id
                }, select: {
                    id: true
                }
            });

            const cartItemAmount = await prisma.cartItem.findFirst({
                where: {
                    shoppingCartId: shoppingCartWithUserId.id,
                    productId: productIdParam
                }, select: {
                    prodAmount: true
                }
            });

            const product = await prisma.products.findFirst({
                where: {
                    id: productIdParam
                }
            })

            if(!product) {
                return res.status(404).json({ error: 'Product not found' });
            }

            return res.status(200).json({ message: 'Product updated successfully', cartItemAmount });
        } catch (error) {
            console.error('Error fetching shopping cart:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
