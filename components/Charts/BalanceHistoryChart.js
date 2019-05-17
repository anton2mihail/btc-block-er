import React from 'react';
import Chart from 'chart.js';

export default class BalanceHistoryChart extends React.Component {
  constructor(props) {
    super(props);
    this.balanceHistoryChart = React.createRef();
    this.chartObj = '';
    this.chartParent = React.createRef();
  }

  componentDidUpdate() {
    this.chartObj.clear();
    this.chartObj.destroy();
    this.buildBalanceChart();
    window.addEventListener('resize', this.updateChart());
  }

  componentDidMount() {
    this.buildBalanceChart();
  }

  updateChart = () => {
    this.chartObj.width = this.chartParent.current.innerWidth;
    this.chartObj.height = this.chartParent.current.innerHeight;
    this.chartObj.resize();
  };

  buildBalanceChart = () => {
    const labels = this.props.txData.map(tx => new Date(tx.time * 1000).getFullYear(), 10);
    const dataPoints = this.props.txData.map(tx => parseFloat(tx.end_balance));
    this.balanceHistoryChart.current.width = this.chartParent.current.innerWidth;
    this.balanceHistoryChart.current.height = this.chartParent.current.innerHeight;

    const ctx = this.balanceHistoryChart.current.getContext('2d');
    this.chartObj = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { data: dataPoints, label: 'Value BTC', backgroundColor: 'rgba(153,255,51,0.4)' },
        ],
      },
      options: {
        scales: {
          yAxes: [{ ticks: { fontColor: 'white', fontStyle: 'italic', fontSize: '14' } }],
          xAxes: [{ ticks: { fontColor: 'white', fontStyle: 'italic', fontSize: '14' } }],
        },
        title: {
          fontSize: '16',
          display: true,
          position: 'top',
          text: 'Wallet Balance 📈',
          fontColor: 'white',
          fontStyle: 'bold',
        },
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'white',
            fontStyle: 'bold',
          },
        },
      },
    });
  };

  render() {
    return (
      <div
        ref={this.chartParent}
        style={{ width: '35vw', maxHeight: '60vh', border: '2px solid purple' }}
      >
        <canvas ref={this.balanceHistoryChart} />
      </div>
    );
  }
}
