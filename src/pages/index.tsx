import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import GameIframe from '@/components/GameIframe';
import { Game,FAQItem,DescSection} from '@/data/Data';
import Description from '@/components/Description';
import useTranslation from 'next-translate/useTranslation'
import { GetServerSidePropsContext } from 'next';
import FAQList from '@/components/FAQList';
import GameList from '@/components/GameList';


const games = [
  {
    title: 'Eggy Car',
    description: 'A fun and challenging car-driving game with a fragile egg on top!',
    imageUrl: '/gameImg/eggy-car.png',
    link: '/eggycar',
  },{
    title: 'Eggy Car',
    description: 'A fun and challenging car-driving game with a fragile egg on top!',
    imageUrl: '/gameImg/eggy-car.png',
    link: '/eggycar',
  },{
    title: 'Eggy Car',
    description: 'A fun and challenging car-driving game with a fragile egg on top!',
    imageUrl: '',
    link: '',
  },{
    title: 'Eggy Car',
    description: 'A fun and challenging car-driving game with a fragile egg on top!',
    imageUrl: '/gameImg/eggy-car.png',
    link: '/eggycar',
  },{
    title: 'Eggy Car',
    description: 'A fun and challenging car-driving game with a fragile egg on top!',
    imageUrl: '/gameImg/eggy-car.png',
    link: '/eggycar',
  }
];
const Home: React.FC<{ game: Game }> = (props) => {
    const  gameName  = 'eggycar';
    const [game, setGame] = useState<Game | undefined>(undefined);
    const { t } = useTranslation('shouye')
    const faqData = (t(`${gameName}.FAQ`, [], { returnObjects: true }) as FAQItem[]) || [];
    console.log(faqData)
    const descData = t(`${gameName}.desc`, [], { returnObjects: true }) as DescSection[] || [];
    const endData = t(`${gameName}.end`);

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

            {Array.isArray(descData) && descData.length > 0 && <Description list={descData} end={endData} />}    
            
            <GameList games={games} />

            { Array.isArray(faqData) && faqData.length > 0 && <FAQList list={faqData} />}
        </Fragment>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            game: {
                "src": "https://webglmath.github.io/eggy-car/"
                ,
                "logoSrc":`/gameImg/eggy-car.png`
            }
        }
    };
}

export default Home;
