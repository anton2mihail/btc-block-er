import React, { Component } from 'react';
import { shallow } from 'enzyme';
import TransactionDataList from '../../../../components/AddressData/DataList/TransactionDataList';

let transactionDataComponent;
const initTransactionDataComponent = () => {
  transactionDataComponent = shallow(<TransactionDataList addrData={{ txs: [{}] }} />);
};

describe('Address Data Section', () => {
  beforeEach(() => {
    initTransactionDataComponent();
  });
  it('renders without crashing', () => {
    const listInstance = shallow(<TransactionDataList addrData={{ txs: [] }} />);
    listInstance.unmount();
  });
  it('contains a list', () => {
    expect(transactionDataComponent.find('.alt')).toBeTruthy();
  });
});
