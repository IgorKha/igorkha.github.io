/**
 * @author Igor Kha <mashinkopochinko@gmail.com>
 * @date 2023-09-02
 * @description hex to binary converter for RCW
 */

import React, { useState, ChangeEvent } from 'react';
import styles from './styles.module.css';
import { bitDescriptions } from './1046bit';

const Rcw1046: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [binaryString, setBinaryString] = useState<string>('');
  const linesPerPage: number = 100;

  const demoData: string = `Reset Configuration Word (RCW):
  00000000: 0c150012 0e000000 00000000 00000000
  00000010: 11335577 40001012 60040000 c1000000
  00000020: 00000000 00000000 00000000 00238800
  00000030: 20124000 00003101 00000096 00000001`

  const loadDemoData = () => {
    if (demoData) {
      const rcwInput = (document.getElementById('rcwInput') as HTMLTextAreaElement | null);
      if (rcwInput) {
        rcwInput.value = demoData;
      }
      convertRCWToBinary();
    }
  };

  const isValidHex = (hex: string): boolean => /^[0-9A-Fa-f]+$/.test(hex);

  const hexToBinary = (hex: string): string =>
    parseInt(hex, 16).toString(2).padStart(hex.length * 4, '0');

  const convertRCWToBinary = () => {
    const rcwInput = (document.getElementById('rcwInput') as HTMLTextAreaElement | null)?.value || '';
    const lines = rcwInput.split('\n');
    let newBinaryString = '';

    lines.forEach((line) => {
      const hexValues = line.trim().split(/\s+/);
      hexValues.forEach((hexValue) => {
        if (isValidHex(hexValue)) {
          newBinaryString += hexToBinary(hexValue);
        }
      });
    });

    setCurrentPage(0);
    setBinaryString(newBinaryString);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalPageCount = Math.ceil(binaryString.length / linesPerPage);
    if (currentPage < totalPageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const generatePageNumbers = (totalPageCount: number): JSX.Element | null => {
    if (totalPageCount > 1) {
      const pageNumbers: React.ReactNode[] = [];
      for (let i = 0; i < totalPageCount; i++) {
        const pageNumber = i + 1;
        if (i === currentPage) {
          pageNumbers.push(<strong key={i}>{pageNumber}</strong>);
        } else {
          pageNumbers.push(
            <a
              href="#"
              key={i}
              onClick={() => setCurrentPage(i)}
            >
              {pageNumber}
            </a>
          );
        }
        pageNumbers.push(' ');
      }
      return (
        <div>
          <button id="prevPage" onClick={prevPage}>
            Previous Page
          </button>
          <span id="pageNumbers" className={styles.pageNumbers}>
            {pageNumbers}
          </span>
          <button id="nextPage" onClick={nextPage}>
            Next Page
          </button>
        </div>
      );
    }
    return null;
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value) {
      convertRCWToBinary();
    }
  };

  return (
    <div className="container">
      <p style={{ margin: '20px 10px' }}></p>
      <h1>LS1046a RCW Hex to Binary Converter</h1>
      <textarea
        id="rcwInput"
        className={styles.textarea}
        rows={8}
        cols={46}
        placeholder="Enter RCW hex values"
        onChange={handleInputChange}
      ></textarea>
      <button id="loadDemoDataButton" onClick={loadDemoData}>Demo</button>
      <button role="button" onClick={convertRCWToBinary}>
        <span className="text">Convert</span>
      </button>
      {binaryString && (
        <div>
          {generatePageNumbers(Math.ceil(binaryString.length / linesPerPage))}
          <table>
            <thead>
              <tr>
                <th>Bit</th>
                <th>Value</th>
                <th>Bit name</th>
              </tr>
            </thead>
            <tbody>
              {binaryString
                .slice(currentPage * linesPerPage, (currentPage + 1) * linesPerPage)
                .split('')
                .map((bitValue, index) => {
                  const bitIndex = index + currentPage * linesPerPage;
                  const bitDescription = bitDescriptions[bitIndex] || 'Reserved Bit';
                  return (
                    <tr key={bitIndex}>
                      <td>Bit {bitIndex}</td>
                      <td>{bitValue}</td>
                      <td>{bitDescription}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rcw1046;
