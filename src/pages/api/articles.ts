import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameName } = req.query;

  if (typeof gameName !== 'string') {
    return res.status(400).json({ error: 'Invalid game name' });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'articleList.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const articleData = JSON.parse(fileContents);

    const articles = articleData[gameName] || [];
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error reading article list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}