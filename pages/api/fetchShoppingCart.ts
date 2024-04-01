import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const user = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
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

            const filteredCart = userWithCart.cart.map(item => ({
                id: item.id,
                prodAmount: item.prodAmount,
                shoppingCartId: item.shoppingCart.id
            }));

            const products = await Promise.all(filteredCart.map(async (item) => {
                const cartItem = await prisma.cartItem.findUnique({
                    where: { id: item.id },
                    select: { productId: true }
                });
                if (cartItem) {
                    const product = await prisma.products.findUnique({
                        where: { id: cartItem.productId }
                    });
                    return product;
                } else {
                    return null;
                }
            }));

            const cartItemAmount = await prisma.cartItem.findMany({
                where: {
                    productId: { in: products.map(p => p.id) }
                }, select: {
                    prodAmount: true
                }
            });
            
            const validProducts = products.filter(product => product !== null);
            res.status(200).json({ products: validProducts, cartItemAmount });
            
        } catch (error) {
            console.error('Error fetching shopping cart:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
