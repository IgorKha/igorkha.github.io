import React, { useState } from 'react';
import axios from 'axios';
import style from './style.module.css';

const TelegramUpdates: React.FC = () => {
  const [botToken, setBotToken] = useState<string>('');
  const [telegramData, setTelegramData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/getUpdates`);
      setTelegramData(response.data);      
    } catch (error) {
      if (error.response) {
        // Если есть ответ от сервера с ошибкой, выводим статус код и описание ошибки
        setError(`Error: ${error.response.status} - ${error.response.statusText}`);
      } else {
        setError('An error occurred while fetching data.');
      }
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

  const apiLink = `https://api.telegram.org/bot${botToken}/getUpdates`;

  return (
    <div className="container">
      <p style={{ margin: '20px 10px' }}></p>
      <h1>Get Telegram ID</h1>
      <div className='theme-admonition theme-admonition-info alert alert--info' style={{ marginBottom: "10px" }}>
      I do not collect or store your information.
      All operations are actually performed on your computer, and I neither can nor want to know what you enter on this page.
      Furthermore, you can find the source code of this page on
      my <a href='https://github.com/IgorKha/igorkha.github.io/tree/main/src/components/TelegramId' target='_blank'>Github</a> to verify this.
      </div>
      <label>
        <input
          type="text"
          value={botToken}
          onChange={(e) => setBotToken(e.target.value)}
          placeholder="Your bot token"
        />
      <button className={style.wide} onClick={handleButtonClick}>Send Request</button>
      </label>
      {isLoading ? (
        <p>Loading Telegram data...</p>
      ) : error ? (
        <p className={style.error_message}>{error}</p>
      ) : telegramData ? (
        <div>
          <a href={apiLink} target='_blank'>{apiLink}</a>
          <pre className='prism-code language-json'>{JSON.stringify(telegramData, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default TelegramUpdates;
