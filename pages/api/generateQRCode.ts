const generatePayload = require('promptpay-qr');
import QRCode from 'qrcode';

interface PromptPayOptions {
    amount?: number;
}

export async function generatePromptPayQRCode(mobileNumber: string, options?: PromptPayOptions): Promise<string> {
    const payload = generatePayload(mobileNumber, options);
    console.log(payload)

    try {
        const qrCodeDataURL = await QRCode.toDataURL(payload);
        return qrCodeDataURL;
    } catch (error) {
        throw new Error(`Error generating QR code: ${error.message}`);
    }
}
