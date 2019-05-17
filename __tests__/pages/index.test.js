import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Index from '../../pages/index';

jest.mock('../../styles/main.scss');
jest.mock('../../components/Document/Layout.js');
let indexComponent;
const initIndexComponent = () => {
  indexComponent = shallow(<Index />);
};

describe('[ / ]route', () => {
  // beforeEach(() => {
  //   initIndexComponent();
  // });
  // it('renders without crashing', () => {
  //   indexComponent.unmount();
  // });
  // it('starts with correct state', () => {
  //   expect(indexComponent.state()).toEqual({ priceData: {}, userCountry: '' });
  // });
});
