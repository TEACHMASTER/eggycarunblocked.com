import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const Home = () => (
  <Layout>
    <Content>
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <iframe
            src="https://webglmath.github.io/eggy-car/"
            title="Example iframe"
            style={{ width: '100%', height: '80vh', border: 'none' }}
          />
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Home;
