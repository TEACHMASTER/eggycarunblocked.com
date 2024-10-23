import React, { Fragment } from 'react';
import { Game } from '../data/Data';
import useTranslation from 'next-translate/useTranslation'

const EggyCarDescription: React.FC<{ obj: Game }> = (props) => {
    
    const { t } = useTranslation('games')
    const { obj } = props;
    return (
        <Fragment>
            {obj && (
                <div className="w-3/4 mx-auto p-6 bg-white rounded-lg shadow-md">
                    {obj.desc?.map((item, index) => (
                        <Fragment key={index}>
                            <h2 className="text-2xl font-bold mb-4 text-yellow-600">{item.title}</h2>
                            <p className="mb-6">{item.p}</p>
                        </Fragment>
                    ))}
                    
                    <p className="font-semibold text-lg text-center text-yellow-600">
                        {obj.end}
                    </p>
                </div>
            )}
        </Fragment>
    );
};

export default EggyCarDescription;
