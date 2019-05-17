import React, { Component } from 'react';
import BalanceHistoryChart from '../Charts/BalanceHistoryChart';
import TransactionDataList from './DataList/TransactionDataList';

export default class AddressDataSection extends Component {
  render() {
    return (
      <section id="two" className="spotlights">
        <section>
          <BalanceHistoryChart txData={this.props.addrData.txs} />
          <div className="content">
            <div className="inner">
              <header className="major" style={{ display: 'inline-flex' }}>
                <h4>Bitcoin Address ➡️ </h4>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <a className="button small">{this.props.addr}</a>
              </header>
              <div style={{ maxHeight: '50vh' }} data-simplebar>
                <TransactionDataList addrData={this.props.addrData} />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
