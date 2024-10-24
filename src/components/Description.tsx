import React, { Fragment } from 'react';
import {DescSection} from '../data/Data';
import useTranslation from 'next-translate/useTranslation'

// 定义组件的 props 接口
interface EggyCarDescriptionProps {
    gameName: string;
    language: string;
}

const EggyCarDescription: React.FC<EggyCarDescriptionProps> = ({ gameName,language }) => {
    const { t } = useTranslation(language)

    // 添加类型检查和错误处理
    const desc: DescSection[] | string = t(`${gameName}.desc`, [], { returnObjects: true });
    const descArray = Array.isArray(desc) ? desc : [];

    return (
        <div className=" md:w-3/4 mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
            {descArray.length > 0 && (
                <Fragment>
                    {descArray.map((section: DescSection, index: number) => (
                    <section key={index} className="mb-6">
                        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-yellow-600">
                            {section.title}
                        </h2>
                        <p className="text-gray-700">{section.p}</p>
                    </section>
                    ))}
                    <p className="font-semibold text-lg text-center text-yellow-600" aria-label="End of description">
                        {t(`${gameName}.end`)}
                    </p>
                </Fragment>
            )}
        </div>
    );
};

export default EggyCarDescription;
