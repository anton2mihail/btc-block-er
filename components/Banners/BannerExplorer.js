import React, { Component } from 'react';
// import fetch from 'node-fetch';
import FontAwesome from 'react-fontawesome';

export default class BannerExplorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleAddressEntry = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleAddressSearch = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.searchTerm.trim());
    this.setState({
      searchTerm: '',
    });
  };

  render() {
    return (
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <form onSubmit={this.handleAddressSearch}>
              <h3 style={{ paddingBottom: 0, marginBottom: '1em' }}>Search</h3>
              <input
                style={{ width: '75%', display: 'inline-block' }}
                type="text"
                placeholder="Example: 1EnJHhq8Jq8vDuZA5ahVh6H4t6jh1mB4rq"
                value={this.state.searchTerm}
                onChange={this.handleAddressEntry}
              />
              <button type="submit" value="Submit" style={{ padding: '3px 1em 1px' }}>
                <FontAwesome name="search" className="fas fa-search" size="2x" />
              </button>
            </form>
          </header>
          <div className="content">
            <p>
              Enter BTC wallet address here
              <br />
              transactions and metadata will appear below.
              <br />
              <sub>(due to api limits only the 50 most recent txs will appear)</sub>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
