import React, { Component } from 'react';
import Link from 'next/link';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      searchTerm: '',
    };
  }

  render() {
    return (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Blocker</h1>
          </header>
          <div className="content">
            <p>
              A mini block explorer using Blockchain.com API
              <br />
              containing up to date stats and info on BTC and others.
            </p>
            <ul className="actions">
              <li>
                <Link href="/explorer">
                  <button type="button" className="button next scrolly">
                    Explore BTC Blockchain
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
