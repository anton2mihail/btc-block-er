import React from 'react';
import Chart from 'chart.js';

export default class PriceTickerChart extends React.Component {
  constructor(props) {
    super(props);
    this.tickerChart = React.createRef();
    this.chartObj = '';
  }

  componentDidUpdate() {
    this.buildPriceChart();
    window.addEventListener('resize', this.updateChart());
  }

  updateChart = () => {
    this.chartObj.render({
      duration: 800,
      easing: 'easeOutBounce',
    });
  };

  buildPriceChart = () => {
    const ctx = this.tickerChart.current.getContext('2d');
    this.chartObj = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Latest', 'Buy', 'Sell'],
        datasets: [
          {
            label: `Price (${this.props.userCurrency})`,
            data: [this.props.priceData.last, this.props.priceData.buy, this.props.priceData.sell],
            backgroundColor: ['#ec8d81', '#6fc3df', '#e7b788'],
            borderColor: ['#ec8d81', '#6fc3df', '#e7b788'],
            borderWidth: 1,
          },
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
          text: 'BTC Price Stats 📈',
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
      <article>
        <canvas style={{ zIndex: 3 }} ref={this.tickerChart} />
      </article>
    );
  }
}
