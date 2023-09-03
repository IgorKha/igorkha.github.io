import React from 'react';
import Layout from '@theme/Layout';
import QRGenerator from '../components/QRGenerator/index';

function Home() {
  return (
    <Layout>
      <main>
        <QRGenerator />
      </main>
    </Layout>
  );
}

export default Home;