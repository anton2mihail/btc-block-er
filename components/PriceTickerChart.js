import React from 'react';
import Chart from 'chart.js';

export default class PriceTickerChart extends React.Component {
  buildPriceChart = elem => {
    const { priceData } = this.props;
    const myChart = new Chart(ctx, {});
  };
  render() {
    return (
      <article style={{ backgroundImage: "url('/static/images/pic02.jpg')" }}>
        <header className="major">
          <h3>Tempus</h3>
          <p>feugiat amet tempus</p>
        </header>
      </article>
    );
  }
}
