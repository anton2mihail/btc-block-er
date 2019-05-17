import React, { Component } from 'react';
import txDateOptions from '../../../utilities/txDateOptions';

export default class DataListElement extends Component {
  render() {
    return (
      <li className="grid">
        <p>
          <sup name="date">Date</sup>
          <a name="date" className="button fit small" disabled>
            {new Date(this.props.tx.time * 1000).toLocaleDateString('en-US', txDateOptions)}
          </a>
        </p>
        <p>
          <sup name="value">Change</sup>
          <a
            name="value"
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
          <sup name="balance">Balance</sup>
          <a name="balance" className="button fit small" disabled>
            {this.props.tx.input_value} ➡️ {this.props.tx.end_balance}{' '}
          </a>
        </p>
      </li>
    );
  }
}
