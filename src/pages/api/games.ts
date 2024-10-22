import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// 读取指定游戏名称的接口
export default  function handler(req: NextApiRequest, res: NextApiResponse) {
  const { gameName } = req.query;

  if (typeof gameName !== 'string') {
    return res.status(400).json({ error: 'Invalid game name' });
  }

  try {
    // 读取 gameList.json 文件
    const filePath = path.join(process.cwd(), 'public', 'gameList.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const gameData = JSON.parse(fileContents);

    // 获取指定游戏名称的数据
    const game = gameData[gameName];

    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }

    res.status(200).json(game);
  } catch (error) {
    console.error('Error reading game list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


