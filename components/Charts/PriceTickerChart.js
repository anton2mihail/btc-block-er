import React, { Component } from 'react';
import Chart from 'chart.js';

export default class PriceTickerChart extends Component {
  constructor(props) {
    super(props);
    this.tickerChart = React.createRef();
    this.article = React.createRef();
    this.chartObj = '';
  }

  componentDidUpdate() {
    this.buildPriceChart();
    window.addEventListener('resize', this.updateChart());
  }

  updateChart = () => {
    this.chartObj.width = this.article.current.innerWidth;
    this.chartObj.height = this.article.current.innerHeight;
    this.chartObj.resize();
  };

  buildPriceChart = () => {
    this.tickerChart.current.width = this.article.current.innerWidth;
    this.tickerChart.current.height = this.article.current.innerHeight;

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
      <article ref={this.article}>
        <canvas style={{ zIndex: 3 }} ref={this.tickerChart} />
      </article>
    );
  }
}
