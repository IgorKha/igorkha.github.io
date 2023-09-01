import React from 'react';
import Layout from '@theme/Layout';
import TelegramId from '../components/TelegramId/index'; // Путь к вашему компоненту

function Home() {
  return (
    <Layout>
      <main>
        <TelegramId />
      </main>
    </Layout>
  );
}

export default Home;
