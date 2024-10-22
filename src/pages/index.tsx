import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import GameIframe from '../components/GameIframe';
import {Article,Game } from '../data/Data';
import EggyCarDescription from '../components/EggyCarDescription';
import useSWR from 'swr';


const Home: React.FC<{ game: Game }> = (props) => {
  const [game, setGame] = useState<Game | undefined>(undefined);
  
  useEffect(() => {
    if (props.game) { 
      setGame(props.game);
    }
  }, [props.game]);

  return (
    <Fragment>
      <Head>
        <title>{game?.title}</title>
        <meta name="description" content={game?.description} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}`} />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST}/icon.svg`} />
      </Head>
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">{game?.title}</h1>
      {game && <GameIframe src={game.src} title={game.title} logoSrc={game.logoSrc} />}
      {game && <EggyCarDescription obj={game} />}
    </Fragment>
  );
};

export async function getServerSideProps() {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const game = await fetch(`${baseUrl}/api/games?gameName=eggycar`).then(res=>res.json());
  return { props: { game } };
}

export default Home;
