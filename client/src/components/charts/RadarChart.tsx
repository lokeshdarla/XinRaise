import { useEffect, useRef } from 'react';
import { Chart, ChartData } from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        Chart.getChart(chartRef.current)?.destroy();
        new Chart(ctx, {
          type: 'radar',
          data: data as ChartData,
          options: {
            elements: {
              line: {
                borderWidth: 3
              }
            }
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} id="myChart" style={{ minWidth: '600px', maxHeight: '300px' }} />;
};

export default RadarChart;
