import React, { Component } from 'react';

export default class DataListElement extends Component {
  render() {
    return (
      <li className="grid">
        <p>
          <sup>Date</sup>
          <a className="button fit small" disabled>
            {new Date(this.props.tx.time * 1000).toLocaleDateString('en-US', this.txDateOptions)}
          </a>
        </p>
        <p>
          <sup>Change</sup>
          <a
            style={{
              color: this.props.tx.value_transacted > 0 ? 'green' : 'red',
            }}
            className="button fit small"
            disabled
          >
            {this.props.tx.value_transacted > 0 ? '+' : ''}
            {this.props.tx.value_transacted}BTC
          </a>
        </p>
        <p>
          <sup>Balance</sup>
          <a className="button fit small" disabled>
            {this.props.tx.input_value} ➡️ {this.props.tx.end_balance}{' '}
          </a>
        </p>
      </li>
    );
  }
}
