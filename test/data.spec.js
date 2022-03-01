import { filterData, sortData, computeStats } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData by title`', () => {
    expect(filterData(data.films[0])).toBe("Kiki's Delivery Service");
  });
});


 describe('sortData', () => {
   it('is a function', () => {
     expect(typeof anotherExample).toBe('function');
   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });


// describe('computeStats', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
  it('returns `filterData by title`', () => {
    expect(filterData(data.films[0])).toBe("Kiki's Delivery Service");
  });
});
