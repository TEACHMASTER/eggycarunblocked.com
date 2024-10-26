import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from 'antd';
import useTranslation from 'next-translate/useTranslation';

const { Title, Paragraph } = Typography;

type Game = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

type GameListProps = {
  games: Game[];
};

const GameList: React.FC<GameListProps> = ({ games }) => {
  const { t } = useTranslation('common')
  return (
    <div className="md:w-3/4 mx-auto p-4 md:p-6 bg-transparent">
      {/* 顶部标题 */}
      <h2 className="text-3xl font-bold text-center mb-6">{t('PerguntasFrequentes')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container">
        {games.map((game, index) => (
          <Card
            hoverable
            className="w-full shadow-lg overflow-hidden flex flex-col justify-between"
            key={index}
          >
            {/* 上半部分：图片背景和标题简介 */}
            <div className="relative h-32">
              <Image
                src={game.imageUrl}
                alt={game.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center p-4">
                <Title level={3} className="text-lg font-bold text-white">{game.title}</Title>
                <Paragraph className="line-clamp-3 text-sm text-white">{game.description}</Paragraph>
              </div>
            </div>

            {/* 下半部分：Play按钮 */}
            <Link href={game.link} passHref>
              <div className="flex justify-center p-4">
                {t('Play')}
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>

  );
};

export default GameList;
