import React from 'react';
import ReactDOM from 'react-dom';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import Chart, { BarChart, LineChart } from '@toast-ui/react-chart';
// import Chart from '@toast-ui/react-chart';

const data = {
  categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000],
    },
    {
      name: 'Income',
      data: [8000, 1000, 7000, 2000, 5000, 3000],
    },
  ],
};

const options = {
  chart: {
    width: 1160,
    height: 650,
    title: 'Monthly Revenue',
  },
  yAxis: {
    title: 'Month',
  },
  xAxis: {
    title: 'Amount',
  },
};

const containerStyle = {
  width: '600px',
  height: '600px',
};

console.log(Chart, BarChart.prototype);
const MyComponent = () => <BarChart data={data} options={options} style={containerStyle} />;

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);