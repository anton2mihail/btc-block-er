import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AddressDataSection from '../../../components/AddressData/AddressDataSection';

let addressDataComponent;
const initAddressDataComponent = () => {
  addressDataComponent = shallow(<AddressDataSection addr={'Yikes'} addrData={{ txs: [] }} />);
};

describe('Address Data Section', () => {
  beforeEach(() => {
    initAddressDataComponent();
  });
  it('renders without crashing', () => {
    const addressInstance = shallow(<AddressDataSection addr={'Yikes'} addrData={{ txs: [] }} />);
    addressInstance.unmount();
  });
  it('contains a BalanceHistoryChart', () => {
    expect(addressDataComponent.find('BalanceHistoryChart')).toBeTruthy();
  });
  it('contains a TransactionDataList', () => {
    expect(addressDataComponent.find('TransactionDataList')).toBeTruthy();
  });
});
