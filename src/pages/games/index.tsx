import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Epic Game Hub | Your Gateway to Gaming Adventures</title>
        <meta name="description" content="Discover and play the latest and greatest games on Epic Game Hub. Your one-stop destination for all things gaming." />
      </Head>

      <Layout>
        <HeroSection />
      </Layout>
    </>
  );
};

export default Home;
