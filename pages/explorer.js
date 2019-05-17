import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import Layout from '../components/Document/Layout';
import BannerExplorer from '../components/Banners/BannerExplorer';
import AddressDataSection from '../components/AddressData/AddressDataSection';

const MINING_TRANSACTION_FLAG = true;
export default class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addrData: undefined,
      addr: '',
    };
    this.chartParent = React.createRef();
  }

  handleNewAddressSearch = (addr) => {
    this.setState({ addr });
    fetch(`https://blockchain.info/rawaddr/${addr}?cors=true`)
      .then((resp, err) => {
        if (err) throw err;
        return resp.json();
      })
      .then((res, onError) => {
        if (onError) throw onError;
        this.setDataValuesToBtc(res);
      });
  };

  setDataValuesToBtc = (jsonData) => {
    const satoshiMultiplier = 100000000;
    const cleanedData = jsonData;
    cleanedData.total_received /= satoshiMultiplier;
    cleanedData.total_sent /= satoshiMultiplier;
    cleanedData.final_balance /= satoshiMultiplier;
    let prevBalance = 0;
    cleanedData.txs = cleanedData.txs.reverse().map((tx) => {
      const cleanedTx = tx;
      delete cleanedTx.ver;
      delete cleanedTx.relayed_by;
      delete cleanedTx.weight;
      const inputTotals = cleanedTx.inputs.reduce((acc, inp) => {
        if (inp.prev_out) {
          return acc + inp.prev_out.value;
        }
        cleanedTx.mining_flag = MINING_TRANSACTION_FLAG;
        return acc;
      }, 0);
      cleanedTx.input_value = inputTotals / satoshiMultiplier + prevBalance;
      const outputTotals = cleanedTx.out.reduce((acc, out) => acc + out.value, 0);
      cleanedTx.output_value = outputTotals / satoshiMultiplier;
      if (!cleanedTx.mining_flag) {
        cleanedTx.miningFee = cleanedTx.input_value - cleanedTx.output_value;
      } else {
        cleanedTx.miningFee = 0;
      }
      const outputTally = cleanedTx.out.reduce((acc, out) => {
        acc[out.addr] = {
          value: (acc[out.addr] ? acc[out.addr].value : 0) + out.value / satoshiMultiplier,
        };
        acc[out.addr].spent = out.spent;
        return acc;
      }, {});
      cleanedTx.outputTally = outputTally;
      let totalUnspentOutputs = Object.entries(outputTally);
      totalUnspentOutputs = totalUnspentOutputs
        .filter(txOut => txOut[0] !== jsonData.address)
        .reduce((UTXO, txOut) => UTXO + (txOut[1].spent ? 0 : txOut[1].value), 0);
      cleanedTx.end_balance = cleanedTx.outputTally[jsonData.address].value + prevBalance;
      prevBalance = cleanedTx.end_balance;
      cleanedTx.value_transacted = cleanedTx.outputTally[jsonData.address].value - totalUnspentOutputs;
      return cleanedTx;
    });

    this.setState({ addrData: cleanedData });
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Address Explorer</title>
          <meta name="description" content="Address Explorer" />
        </Head>
        <div>
          <BannerExplorer handleSearch={this.handleNewAddressSearch} />
          <div>
            {this.state.addrData ? (
              <AddressDataSection addr={this.state.addr} addrData={this.state.addrData} />
            ) : (
              ''
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
