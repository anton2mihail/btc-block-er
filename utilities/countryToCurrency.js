const mapping = {
  CA: 'CAD',
  US: 'USD',
  AU: 'AUD',
  NZ: 'NZD',
  SW: 'CHF',
};
const getCur = (country) => {
  const cur = mapping[country];
  // Sanity Check
  if (cur.length === 3 && country) {
    return cur;
  }
  // Defaults to Usd
  return 'USD';
};

export default getCur;
