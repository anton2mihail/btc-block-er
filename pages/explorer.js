import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import BannerLanding from '../components/BannerLanding';

export default class Explorer extends React.Component {
  handleNewAddressSearch = (addr) => {
    console.log(addr);
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Address Explorer</title>
          <meta name="description" content="Address Explorer" />
        </Head>

        <div>
          <BannerLanding handleSearch={this.handleNewAddressSearch} />

          <div id="main">
            <section id="two" className="spotlights">
              <section>
                <Link href="/generic">
                  <a className="image">
                    <img src="/static/images/pic08.jpg" alt="" />
                  </a>
                </Link>
                <div className="content">
                  <div className="inner">
                    <header className="major">
                      <h3>Orci maecenas</h3>
                    </header>
                    <p>
                      Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc
                      rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed
                      magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                      consequat tincidunt. Vivamus et sagittis tempus.
                    </p>
                    <ul className="actions">
                      <li>
                        <Link href="/generic">
                          <a className="button">Learn more</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
