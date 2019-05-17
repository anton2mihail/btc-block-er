import React, { Component } from 'react';
import { shallow } from 'enzyme';
import DataListElement from '../../../../components/AddressData/DataList/DataListElement';

let dataListElementComponent;
const initdataListElementComponent = () => {
  dataListElementComponent = shallow(
    <DataListElement
      tx={{
        time: 1202020,
        value_transacted: 1000,
        input_value: 1000,
        end_balance: 1000,
      }}
    />,
  );
};

describe('Address Data Section', () => {
  beforeEach(() => {
    initdataListElementComponent();
  });
  it('renders without crashing', () => {
    const listElementInstance = shallow(
      <DataListElement
        tx={{
          time: 1202020,
          value_transacted: 1000,
          input_value: 1000,
          end_balance: 1000,
        }}
      />,
    );
    listElementInstance.unmount();
  });
});
