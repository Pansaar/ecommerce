import { NextApiRequest, NextApiResponse } from 'next';

const imageArray = ['pic0.jpg', 'pic1.jpg', 'pic2.jpg'];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.status(405).end();
  }
}

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { index } = req.query;
  const currentIndex = parseInt(index as string, 10);

  // Check if the requested index is within the bounds
  if (currentIndex >= 0 && currentIndex < imageArray.length) {
    // Construct the path to the image file without /public
    const imagePath = `${imageArray[currentIndex]}`;

    // Send the image path in the response
    res.status(200).json({ imagePath });
  } else {
    res.status(404).end('Image not found');
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { index } = req.body;
    const currentIndex = parseInt(index as string);

    if (currentIndex >= 0 && currentIndex < imageArray.length) {
      const imagePath = `/${imageArray[currentIndex]}`;
      res.status(200).json({ imagePath });
    } else {
      res.status(404).end('Image not found');
    }
  } catch (error) {
    console.error('Error processing POST request:', error);
    res.status(500).end('Internal Server Error');
  }
}
