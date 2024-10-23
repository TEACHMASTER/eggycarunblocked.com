import React, { Fragment } from 'react';
import {DescSection} from '../data/Data';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';

const EggyCarDescription: React.FC = () => {
    const router = useRouter();
    const { gameName } = router.query;
    const { t } = useTranslation('games')

    const desc: DescSection[] = t(`${gameName}.desc`, [], { returnObjects: true });

    return (
        <Fragment>
            <div className="w-3/4 mx-auto p-6 bg-white rounded-lg shadow-md">
                {desc.map((section: any, index: number) => (
                    <Fragment key={index}>
                        <h2 className="text-2xl font-bold mb-4 text-yellow-600">{section.title}</h2>
                        <p className="mb-6">{section.p}</p>
                    </Fragment>
                ))}
                 <p className="font-semibold text-lg text-center text-yellow-600">
                    {t(`${gameName}.end`)}
                </p>
            </div>
        </Fragment>
    );
};

export default EggyCarDescription;
