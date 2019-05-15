import React from 'react';
// import fetch from 'node-fetch';
import FontAwesome from 'react-fontawesome';

class BannerLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.props.handleSearch(this.state.searchTerm);
    }
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <section id="banner" className="style2">
        <div className="inner">
          <header className="major">
            <form onSubmit={this.handleSubmit}>
              <h3 style={{ paddingBottom: 0, marginBottom: '1em' }}>Search</h3>
              <input
                style={{ width: '75%', display: 'inline-block' }}
                type="text"
                placeholder="Enter Addr (ie. '1EnJHhq8Jq8vDuZA5ahVh6H4t6jh1mB4rq')"
                value={this.state.searchTerm}
                onChange={this.handleSearch}
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
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerLanding;
