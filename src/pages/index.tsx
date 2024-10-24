import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import GameIframe from '@/components/GameIframe';
import { Game } from '@/data/Data';
import EggyCarDescription from '@/components/EggyCarDescription';
import useTranslation from 'next-translate/useTranslation'
import { GetServerSidePropsContext } from 'next';
const Home: React.FC<{ game: Game }> = (props) => {
    const  gameName  = 'eggycar';
    const [game, setGame] = useState<Game | undefined>(undefined);
    const { t } = useTranslation('shouye')

    useEffect(() => {
        if (props.game) {
            setGame(props.game);
        }
    }, [props.game]);

    return (
        <Fragment>
            <Head>
                <title>{t(`${gameName}.title`)}</title>
                <meta name="description" content={t(`${gameName}.description`)} />
            </Head>

            <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">{t(`${gameName}.title`)}</h1>

            {game && <GameIframe src={game.src} title={t(`${gameName}.title`)} logoSrc={game.logoSrc} />}

            <EggyCarDescription gameName={gameName} language="shouye"/>
        </Fragment>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            game: {
                "src": "https://webglmath.github.io/eggy-car/"
                ,
                "logoSrc":"https://webglmath.github.io/eggy-car/logo.png"
            }
        }
    };
}

export default Home;
