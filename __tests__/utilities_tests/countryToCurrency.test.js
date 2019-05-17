import { shallow } from 'enzyme';

import coutryToCurrency from '../../utilities/countryToCurrency';

describe('country to currency', () => {
  it('exists', () => {
    expect(coutryToCurrency).toBeDefined();
  });
  it('correctly returns the default if unknown', () => {
    expect(coutryToCurrency('SI')).toEqual('USD');
  });
  it('returns the correct currency', () => {
    expect(coutryToCurrency('AU')).toEqual('AUD');
  });
});
