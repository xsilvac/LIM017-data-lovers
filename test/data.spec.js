import { filterData } from '../src/data.js';

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('returns `filterData by title`', () => {
    expect(filterData(data.films[0])).toBe("Kiki's Delivery Service");
  });
});