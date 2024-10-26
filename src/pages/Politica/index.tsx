import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;
const PrivacyPolicy: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <Title level={2} className="text-center text-2xl mb-4">隐私政策</Title>
            <Paragraph className="mb-4">
                本隐私政策说明我们如何收集、使用和保护您的个人信息。我们承诺尊重您的隐私，并确保您的信息安全。
            </Paragraph>
            <Title level={3} className="text-xl mb-2">信息收集</Title>
            <Paragraph className="mb-4">
                我们可能会收集您的姓名、电子邮件地址以及其他相关信息，以提供更好的服务。
            </Paragraph>
            <Title level={3} className="text-xl mb-2">信息使用</Title>
            <Paragraph className="mb-4">
                我们使用收集的信息来改善我们的服务、与您沟通和满足您的需求。
            </Paragraph>
            <Title level={3} className="text-xl mb-2">信息保护</Title>
            <Paragraph className="mb-4">
                我们采取合理的措施来保护您的个人信息不被未经授权的访问、使用或披露。
            </Paragraph>
            <Title level={3} className="text-xl mb-2">您的权利</Title>
            <Paragraph className="mb-4">
                您有权访问、修改或删除我们所持有的您的个人信息。请与我们联系以行使这些权利。
            </Paragraph>
            <Paragraph className="text-center text-sm text-gray-500 mt-6">
                本政策可能会不时更新，建议您定期查看以了解最新信息。
            </Paragraph>
        </div>  
    );
};

export default PrivacyPolicy;   