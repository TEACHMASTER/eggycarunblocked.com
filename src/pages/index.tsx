import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const Home = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current;
        const iframeWidth = iframe.clientWidth;
        const iframeHeight = iframe.clientHeight;
        const scale = Math.min(
          iframeWidth / 800,  // 假设原始宽度为 800px
          iframeHeight / 600  // 假设原始高度为 600px
        );
        iframe.style.transform = `scale(${scale})`;
        iframe.style.transformOrigin = 'top left';
      }
    };

    window.addEventListener('resize', resizeIframe);
    resizeIframe(); // 初始调整

    return () => window.removeEventListener('resize', resizeIframe);
  }, []);

  return (
    <>
      <Head>
        <title>Eggy Car Game | Fun Online Racing Game</title>
        <meta name="description" content="Play Eggy Car, the exciting online racing game. Navigate through challenging tracks and have fun with this addictive browser-based game." />
        <meta name="keywords" content="Eggy Car, online game, racing game, browser game" />
        <meta property="og:title" content="Eggy Car Game | Fun Online Racing Game" />
        <meta property="og:description" content="Play Eggy Car, the exciting online racing game. Navigate through challenging tracks and have fun with this addictive browser-based game." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/images/eggy-car-og-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>
      <Layout>
        <Content>
          <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
              <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome to Eggy Car Game</h1>
              <div style={{ width: '100%', height: '600px', overflow: 'hidden' }}>
                <iframe
                  ref={iframeRef}
                  src="https://webglmath.github.io/eggy-car/"
                  title="Eggy Car Game"
                  style={{
                    width: '800px',
                    height: '600px',
                    border: 'none',
                    transformOrigin: 'top left',
                  }}
                />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
