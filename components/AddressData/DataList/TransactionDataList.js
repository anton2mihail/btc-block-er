import React, { Component } from 'react';
import DataListElement from './DataListElement';

export default class TransactionDataList extends Component {
  render() {
    return (
      <ul className="alt">
        {this.props.addrData.txs.map((tx, id) => (
          <DataListElement key={id} tx={tx} />
        ))}
      </ul>
    );
  }
}
