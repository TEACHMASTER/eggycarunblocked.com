import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Game from '@/components/Game';

interface Game {
  id: number;
  title: string;
  imageUrl: string;
  genre: string;
  url: string;
}

const games: Game[] = [
  { id: 1, title: "Space Explorer", imageUrl: "/images/space-explorer.jpg", genre: "Adventure", url: "https://webglmath.github.io/eggy-car/" },
  { id: 2, title: "Medieval Quest", imageUrl: "/images/medieval-quest.jpg", genre: "RPG", url: "https://webglmath.github.io/eggy-car/" },
  { id: 3, title: "Cyber Racer", imageUrl: "/images/cyber-racer.jpg", genre: "Racing", url: "https://webglmath.github.io/eggy-car/" },
  { id: 4, title: "Puzzle Master", imageUrl: "/images/puzzle-master.jpg", genre: "Puzzle", url: "https://webglmath.github.io/eggy-car/" },
];

const GameDetail: React.FC = () => {
  const router = useRouter();
  const { gameName } = router.query;

  const game = games.find((g) => g.title === gameName);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Head>
          <title>Game Not Found | Epic Game Hub</title>
          <meta name="description" content="The requested game could not be found." />
        </Head>
        <h1 className="text-3xl font-bold mb-6 text-red-600">Game not found</h1>
        <Link
          href="/"
          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          tabIndex={0}
          role="button"
          aria-label="Return to game list"
        >
          Back to game list
        </Link>
      </div>
    );
  }

  return (
    <Fragment>

      <Head>
        <title>{`${game.title} | Epic Game Hub`}</title>
        <meta name="description" content={`Play ${game.title}, a ${game.genre} game on Epic Game Hub.`} />
      </Head>

      <Layout>
        <Navbar />
        <main>
          <Game game={ game} />
        </main>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default GameDetail;