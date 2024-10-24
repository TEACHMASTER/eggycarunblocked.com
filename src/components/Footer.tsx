import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';

const { Footer: AntdFooter } = Layout;

const Footer: React.FC = () => {
    return (
        <AntdFooter className="bg-transparent text-center py-4">
            <div className="text-gray-500">
                eggy-car-unblocked.com © 2024 | <Link href="/Politica" className=" hover:underline">Politica de Privacidade</Link>
            </div>
        </AntdFooter>
    );
};

export default Footer;