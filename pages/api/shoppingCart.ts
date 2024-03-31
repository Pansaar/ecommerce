import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const userParam = Array.isArray(req.query.user) ? req.query.user[0] : req.query.user;
      const productIdParam = Array.isArray(req.query.productId) ? req.query.productId[0] : req.query.productId; 
      const { amount } = req.body;

      console.log(amount);

      const user = await prisma.user.findUnique({
        where: { username: userParam },
        include: { shoppingCart: true }
      });

      console.log(user);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      let shoppingCart = user.shoppingCart;
      if (!shoppingCart) {
        shoppingCart = await prisma.shoppingCart.create({
          data: {
            shopper: { connect: { username: userParam } },
            cart: {
              create: { prodAmount: amount }
            }
          }
        });
      }

      console.log('SHOPPING CART:', shoppingCart);

      const product = await prisma.products.findFirst({
        where: { id: productIdParam },
        select: {
          id: true
        }
      });

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      let existingCartItem = await prisma.cartItem.findFirst({
        where: {
          shoppingCartId: shoppingCart.id,
          productId: productIdParam
        }
      });
      
      
      if (!existingCartItem) {
        existingCartItem = await prisma.cartItem.create({
          data: {
            shoppingCart: { connect: { id: shoppingCart.id } },
            prodAmount: amount,
            product: { connect: { id: product.id } }
          }
        });
      }

      console.log('EXISTING:', existingCartItem)

      const updatedCartItem = await prisma.cartItem.update({
        where: { id: existingCartItem.id },
        data: { prodAmount: amount }
      });

      console.log('CART ITEM:', updatedCartItem);

      return res.status(200).json({ message: 'Product amount updated successfully', updatedCartItem });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error updating product amount:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
