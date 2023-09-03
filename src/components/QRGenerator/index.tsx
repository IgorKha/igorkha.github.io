import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
        <p style={{margin: "20px 10px"}}></p>
        <h1>QR Code Generator</h1>
        <div className='theme-admonition theme-admonition-info alert alert--info' style={{ marginBottom: "10px" }}>
      I do not collect or store your information.
      All operations are actually performed on your computer, and I neither can nor want to know what you enter on this page.
      Furthermore, you can find the source code of this page on
      my <a href='https://github.com/IgorKha/igorkha.github.io/tree/main/src/components/QRGenerator' target='_blank'>Github</a> to verify this.
      </div>
        <textarea
          placeholder="Enter text"
          value={text}
          onChange={handleTextChange}
          rows={4} // Вы можете настроить количество строк в textarea
        />
        <div style={{
            textAlign: "center",
            marginTop: "10px",
        }}>
            {text && <QRCode value={text} size={256}/>}
        </div>
    </div>
  );
};

export default QRGenerator;
