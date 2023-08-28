/**
 * @author Igor Kha <mashinkopochinko@gmail.com>
 * @date 2023-08-29
 * @description Component for displaying a graph of the frequency and temperature of the processor
 */

import React, { useState, useRef, useEffect } from 'react';
import Chart from './chart.js';

interface ChartEntry {
  timestamp: number;
  frequency: number;
  temperature: number;
}

interface JsonData {
  SN: string;
  note?: string;
  cpu: ChartEntry[];
}

const ChartComponent: React.FC = () => {
  const [chartInstance, setChartInstance] = useState<any | null>(null);
  const [chartCreated, setChartCreated] = useState<boolean>(false);
  const jsonDataRef = useRef<HTMLTextAreaElement | null>(null);

  const demoData: JsonData = {
    SN: "SN0001",
    note: "This is a note",
    cpu: [
        {"timestamp": 1692713925, "frequency": 3219.181, "temperature": 61.0},
        {"timestamp":1692713926, "frequency":2740.720, "temperature":59.0},
        {"timestamp":1692713927, "frequency":1705.188, "temperature":61.0},
        {"timestamp":1692713928, "frequency":3010.267, "temperature":68.0},
        {"timestamp":1692713929, "frequency":1500.000, "temperature":59.0},
        {"timestamp":1692713930, "frequency":1500.000, "temperature":58.0},
        {"timestamp":1692713931, "frequency":3860.388, "temperature":58.0},
        {"timestamp":1692713932, "frequency":457.516, "temperature":59.0},
        {"timestamp":1692713933, "frequency":1500.000, "temperature":59.0},
        {"timestamp":1692713934, "frequency":1500.000, "temperature":57.0}
    ]
  };

  const loadDemoData = () => {
    if (jsonDataRef.current) {
      jsonDataRef.current.value = JSON.stringify(demoData, null, 2);
    }
    createChart();
  };

  const createChart = () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
    setChartCreated(false);

    if (!chartCreated && jsonDataRef.current) {
      try {
        const jsonData: JsonData = JSON.parse(jsonDataRef.current.value);

        const serialNumber = jsonData.SN;
        const note = jsonData.note ? `Note: ${jsonData.note}` : '';

        const dateLog = (jsonData: JsonData) => {
          const firstEntry = jsonData.cpu[0];
          const firstTimestamp = new Date(firstEntry.timestamp * 1000);
          const year = firstTimestamp.getFullYear();
          const month = String(firstTimestamp.getMonth() + 1).padStart(2, '0');
          const day = String(firstTimestamp.getDate()).padStart(2, '0');
          const hours = String(firstTimestamp.getHours()).padStart(2, '0');
          const minutes = String(firstTimestamp.getMinutes()).padStart(2, '0');
          const seconds = String(firstTimestamp.getSeconds()).padStart(2, '0');
          return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        };

        const timestamps = jsonData.cpu.map(entry => {
          const date = new Date(entry.timestamp * 1000);
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');
          const seconds = String(date.getSeconds()).padStart(2, '0');
          return `${hours}:${minutes}:${seconds}`;
        });
        const frequencies = jsonData.cpu.map(entry => entry.frequency);
        const temperatures = jsonData.cpu.map(entry => entry.temperature);
        const formattedFirstTimestamp = dateLog(jsonData);
        
        const ctx = document.getElementById('cpuChart');
        setChartInstance(new Chart(ctx, {
          type: 'line',
          data: {
            labels: timestamps,
            datasets: [
              {
                label: 'CPU frequency',
                yAxisID: 'frequency',
                data: frequencies,
                pointStyle: 'circle',
                pointHoverRadius: 8,
              },
              {
                label: 'CPU temperature',
                yAxisID: 'temperature',
                data: temperatures,
                pointStyle: 'circle',
                pointHoverRadius: 8,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: `Serial Number: ${serialNumber}, Date: ${formattedFirstTimestamp}`
              },
              subtitle: {
                display: true,
                text: `${note}`
              },
            },
            layout: {
              autoPadding: true
            },
            stacked: false,
            interaction: {
              mode: 'index',
              intersect: false,
            },
            scales: {
              x: {},
              frequency: {
                alignToPixels: true,
                position: 'left',
                title: {
                  display: true,
                  text: 'Frequency',
                },
              },
              temperature: {
                alignToPixels: true,
                position: 'right',
                grid: {
                  drawOnChartArea: false,
                },
                title: {
                  display: true,
                  text: 'Temperature',
                },
              },
            },
          },
        }));
      } catch (error) {
        console.error('Error creating chart:', error);
      }
    }
  };

  useEffect(() => {
    if (chartCreated) {
      createChart();
    }
  }, [chartCreated]);

  return (
    <div className="container">
      <p style={{margin: "20px 10px"}}></p>
      <h1>CPU frequency and temperature graph</h1>
      <div>
        <label htmlFor="jsonData">JSON-data:</label>
        <p/>
        <textarea
          ref={jsonDataRef}
          id="jsonData"
          rows={5}
          cols={46}
        ></textarea>
        <br/>
        <button id="loadDemoDataButton" onClick={loadDemoData}>
          Demo
        </button>
        <button id="createGraphButton" onClick={createChart}>
          Graph it!
        </button>
      </div>
      <canvas id="cpuChart"></canvas>
      <p/>
    </div>
  );
};

const MemoizedChartComponent = React.memo(ChartComponent);

export default MemoizedChartComponent;
