// pages/api/preview.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { unfurl } from 'unfurl.js';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid url parameter' });
  }

  try {
    const data = await unfurl(url);
    res.setHeader('Cache-Control', 's-maxage=86400'); // Cache for 1 day
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch preview' });
    console.log(error)
  }
}
