import { NextApiRequest, NextApiResponse } from 'next';
import { generatePromptPayQRCode } from './generateQRCode';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { amount } = req.body;
    const mobileNumber = '0987726455';

    if (!mobileNumber || !amount) {
        return res.status(400).json({ error: 'Mobile number and amount are required' });
    }

    try {
        const qrCodeDataURL = await generatePromptPayQRCode(mobileNumber, { amount });
        res.status(200).json({ qrCodeDataURL });
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ error: 'Error generating QR code' });
    }
}