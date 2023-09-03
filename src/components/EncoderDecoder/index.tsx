import React, { useState, useEffect, useRef } from 'react';
import * as CryptoJS from 'crypto-js';
import 'crypto-js/lib-typedarrays';
import style from './style.module.css';

const algorithmOptions = [
  'MD5',
  'SHA1',
  'SHA256',
  'SHA224',
  'SHA512',
  'SHA384',
  'SHA3',
  'RIPEMD160',
  'Base64',
];

const HashEncoderDecoder: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<string>('SHA256');
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [operation, setOperation] = useState<string>('encode');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const outputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    handleButtonClick();
  }, [algorithm, inputText, operation]);

  const handleAlgorithmChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(event.target.value);
    setOperation('encode');
    setErrorMessage('');
    setOutputText('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleOperationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOperation(event.target.value);
    if (algorithm === 'Base64' && event.target.value === 'decode') {
      setInputText('');
    }
    setErrorMessage('');
    setOutputText('');
  };

  const handleButtonClick = () => {
    if (!inputText) {
      return;
    }

    let result = '';

    try {
      if (algorithm === 'Base64') {
        if (operation === 'encode') {
          result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(inputText));
        } else if (operation === 'decode') {
          result = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(inputText));
        }
      } else {
        const selectedAlgorithm = algorithmOptions.find((option) => option === algorithm);

        if (selectedAlgorithm) {
          result = CryptoJS[selectedAlgorithm](inputText).toString();
        }
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error: Invalid data for decoding');
    }

    setOutputText(result);
  };

  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (outputRef.current) {
      outputRef.current.select();
      document.execCommand('copy');
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    }
  };

  return (
    <div className="container">
      <p style={{margin: "20px 10px"}}></p>
      <h1>Encoding and Decoding</h1>
      <div className='theme-admonition theme-admonition-info alert alert--info' style={{ marginBottom: "10px" }}>
      I do not collect or store your information.
      All operations are actually performed on your computer, and I neither can nor want to know what you enter on this page.
      Furthermore, you can find the source code of this page on
      my <a href='https://github.com/IgorKha/igorkha.github.io/tree/main/src/components/converter' target='_blank'>Github</a> to verify this.
      </div>
      <div>
        <label>
          Select algorithm:
          <select value={algorithm} onChange={handleAlgorithmChange}>
            {algorithmOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      {algorithm === 'Base64' ? (
        <div>
          <label>
            Select operation:
            <div>
              <input
                type="radio"
                value="encode"
                checked={operation === 'encode'}
                onChange={handleOperationChange}
              />
              Encode
              <input
                type="radio"
                value="decode"
                checked={operation === 'decode'}
                onChange={handleOperationChange}
              />
              Decode
            </div>
          </label>
        </div>
      ) : null}
      <div>
          <input type="text" placeholder='Enter text' value={inputText} onChange={handleInputChange} />
      </div>
      <div>
        {errorMessage ? (
          <p className={style.error_message}>{errorMessage}</p>
        ) : outputText ? (
          <div>
            <h2>Result:</h2>
            <input
              type="text"
              value={outputText}
              readOnly
              ref={outputRef}
              onClick={copyToClipboard}
            />
            {copySuccess && <p style={{ color: 'green' }}>Copied to clipboard!</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HashEncoderDecoder;
