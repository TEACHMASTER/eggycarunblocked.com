import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import GameIframe from '@/components/GameIframe';
import { Game,DescSection } from '@/data/Data';
import EggyCarDescription from '@/components/EggyCarDescription';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

const Games: React.FC<{ game: Game }> = (props) => {
    const router = useRouter();
    const { gameName } = router.query;
    const [game, setGame] = useState<Game>();
    const { t } = useTranslation('games')

    // 添加类型检查和错误处理
    const desc: DescSection[] | string = t(`${gameName}.desc`, [], { returnObjects: true });
    const descArray = Array.isArray(desc) ? desc : [];

    useEffect(() => {
        if (props.game) {
            console.log(props.game);
            setGame(props.game);
        }
    }, [props.game]);


    // 检查game是否存在且有必要的属性
    const isGameValid = game && game.src && game.title;

    return (
        <Fragment>
            <Head>
                <title>{game?.title}</title>
                <meta name="description" content={game?.description} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}`} />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_HOST}/icon.svg`} />
            </Head>
            {isGameValid && (
                <>
                    <h1 className="text-4xl font-bold text-center text-yellow-600 mb-6">
                        {t(`${gameName}.title`)}
                    </h1>
                    <GameIframe 
                        src={game.src} 
                        title={t(`${gameName}.title`)} 
                        logoSrc={game.logoSrc} 
                    />
                </>
            )}
            {descArray.length > 0 && <EggyCarDescription gameName={gameName as string} language="games"/>}
        </Fragment>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {params } = context; 
    const { gameName } = params as { gameName: string };    
    const baseUrl = process.env.NEXT_PUBLIC_HOST;
    const game = await fetch(`${baseUrl}/api/games?gameName=${gameName}`).then(res => res.json());

    const isGameValid = game && game.src && game.title;
    if (!isGameValid) {
        return { redirect: { destination: '/404', permanent: false } };
    }
    return { props: { game, isGameValid } };
}

export default Games;
