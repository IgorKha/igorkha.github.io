import React, { useState } from 'react';
import axios from 'axios';

const TelegramUpdates: React.FC = () => {
  const [botToken, setBotToken] = useState<string>('');
  const [telegramData, setTelegramData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/getUpdates`, {
        offset: 5,
      });
      setTelegramData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (botToken) {
      fetchData();
    }
  };

  return (
    <div className="container">
      <p style={{ margin: '20px 10px' }}></p>
      <h1>Get Telegram ID</h1>
      <label>
        Enter your bot token:
        <input
          type="text"
          value={botToken}
          onChange={(e) => setBotToken(e.target.value)}
          placeholder="Your bot token"
        />
      </label>
      <button onClick={handleButtonClick}>Send Request</button>
      {isLoading ? (
        <p>Loading Telegram data...</p>
      ) : telegramData ? (
        <pre className='prism-code language-json'>{JSON.stringify(telegramData, null, 2)}</pre>
      ) : null}
    </div>
  );
};

export default TelegramUpdates;
