import React from 'react';
import Link from 'next/link';
import fetch from 'node-fetch';
import ipInfo from 'ipinfo';
import countryToCurrency from '../utilities/countryToCurrency';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import PriceTickerChart from '../components/PriceTickerChart';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceData: {},
      userCountry: '',
    };
  }

  componentDidMount() {
    this.getLocale().then(() => {
      this.fetchBtcPriceData();
    });
  }
  fetchBtcPriceData = () => {
    fetch('https://blockchain.info/ticker')
      .then((res, err) => res.json())
      .then(data => {
        const currency = countryToCurrency(this.state.userCountry);
        this.setState({
          priceData: data[currency],
          userCurrency: currency,
        });
      });
  };

  getLocale = () => {
    return new Promise((res, rej) => {
      ipInfo((err, cLoc) => {
        this.setState({ userCountry: cLoc.country });
        res();
      }, 'acb325fef4f5fb');
    });
  };

  render() {
    return (
      <Layout>
        <div>
          <Banner />
          <div id="main">
            <section id="one" className="tiles">
              <article style={{ backgroundImage: "url('/static/images/pic01.jpg')" }}>
                <header className="major">
                  <h3>{`BTC`}</h3>
                  <p>{`Price (15m): ${this.state.priceData['15m']}${this.state.priceData.symbol} ${
                    this.state.userCurrency
                  }`}</p>
                </header>
              </article>
              <PriceTickerChart priceData={this.state.priceData} />
              <article style={{ backgroundImage: "url('/static/images/pic03.jpg')" }}>
                <header className="major">
                  <h3>Magna</h3>
                  <p>Lorem etiam nullam</p>
                </header>
              </article>
              <article style={{ backgroundImage: "url('/static/images/pic04.jpg')" }}>
                <header className="major">
                  <h3>Ipsum</h3>
                  <p>Nisl sed aliquam</p>
                </header>
              </article>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
