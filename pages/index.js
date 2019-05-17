import React, { Component } from 'react';
import fetch from 'node-fetch';
import ipInfo from '../utilities/ipinfo/lib/index';
import countryToCurrency from '../utilities/countryToCurrency';

import Layout from '../components/Document/Layout';
import Banner from '../components/Banners/Banner';
import PriceTickerChart from '../components/Charts/PriceTickerChart';

export default class Index extends Component {
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
      .then((res, err) => {
        if (err) throw err;
        return res.json();
      })
      .then((data) => {
        const currency = countryToCurrency(this.state.userCountry);
        this.setState({
          priceData: data[currency],
          userCurrency: currency,
        });
      });
  };

  getLocale = () => new Promise((res, rej) => {
    ipInfo((err, cLoc) => {
      if (err) rej();
      this.setState({ userCountry: cLoc.country });
      res();
    }, 'acb325fef4f5fb');
  });

  render() {
    return (
      <Layout>
        <div>
          <Banner />
          <div id="main">
            <section id="one" className="tiles">
              <article>
                <header className="major">
                  <h3>{'BTC'}</h3>
                  <p>{`Price (15m): ${this.state.priceData['15m']}${this.state.priceData.symbol} ${
                    this.state.userCurrency
                  }`}</p>
                </header>
              </article>
              <PriceTickerChart
                priceData={this.state.priceData}
                userCurrency={this.state.userCurrency}
              />
              <article>
                <header className="major">
                  <h3>Coming Soon...</h3>
                  <p>Realtime BTC Price Charts</p>
                </header>
              </article>
              <article>
                <header className="major">
                  <h3>😉</h3>
                  <p>And Many More</p>
                </header>
              </article>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
