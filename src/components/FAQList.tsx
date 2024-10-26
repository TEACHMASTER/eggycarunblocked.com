import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { FAQItem } from '@/data/Data';


// 定义组件 props 类型
type FAQListProps = {
    list: FAQItem[];
};

const FAQList: React.FC<FAQListProps> = ({ list }) => {
    const { t } = useTranslation('common')
    return (
        <div className="md:w-3/4 mx-auto p-4 md:p-6 bg-transparent">
            {/* 顶部标题 */}
            <h2 className="text-3xl font-bold text-center mb-6">{t('PerguntasFrequentes')}</h2>
            {/* 问题卡片列表 */}
            <div className="space-y-4">
                { list.map((faq) => (
                    <div
                        key={faq.id}
                        className="bg-white shadow-lg rounded-md p-4"
                    >
                        {/* 卡片标题 */}
                        <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                        {/* 卡片内容 */}
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQList;