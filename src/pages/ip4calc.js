import React from 'react';
import Layout from '@theme/Layout';
import IpCalc from '../components/Ip4Calc/index';

function Home() {
  return (
    <Layout>
      <main>
        <IpCalc />
      </main>
    </Layout>
  );
}

export default Home;