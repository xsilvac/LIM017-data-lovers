import { filterDataDirector, filterDataProducer } from '../src/data.js';

const testDirector = [
  {director: "Gorō Miyazaki"},
  {director: "Hayao Miyazaki"},
  {director: "Hiromasa Yonebayashi"},
]
 describe('filterDataDirector', () => {
   it('siempre devuelve un array', () => {
    expect(filterDataDirector(testDirector, "director") instanceof Array).toBe(true);
    //  expect(filterDataDirector(datatest, "director")).toEqual(datatest.arrayContainingdatatest("Hayao Miyazaki"));
   });
   it('devuelve las animaciones del director', () => {
     const result = filterDataDirector(testDirector, "Isao Takahata")

     expect(result).toEqual([ { "title": "Grave of the Fireflies", "director": "Isao Takahata"}]);
    //  expect(filterDataDirector(datatest, "director")).toEqual(datatest.arrayContainingdatatest("Hayao Miyazaki"));
   });
 });

  it('devolver el nombre del director "Gorō Miyazaki"', () => {
    const results = [{director: "Gorō Miyazaki"}]
    expect(filterDataDirector(testDirector, "Gorō Miyazaki")).toEqual(results);
  });


const testProducer = [
  {producer: "Toru Hara"},
  {producer: "Toshio Suzuki"},
  {producer: "Yoshiaki Nishimura"},
]
 const result = [{producer: "Toru Hara"}]
describe('filterDataProducer', () => {
  it('devolver el nombre del producer "Toru Hara"', () => {
    expect(filterDataProducer(testProducer, "Toru Hara")).toEqual(result);
  });
});


