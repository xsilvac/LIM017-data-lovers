 import { filterDataDirector } from '../src/data.js';

 const datatest = [
       { "title": "Porco Rosso",
         "director": "Hayao Miyazaki"
       },
       { "title": "Grave of the Fireflies",
       "director": "Isao Takahata"},
 ]

 describe('filterDataDirector', () => {
   it('siempre devuelve un array', () => {
    expect(filterDataDirector(datatest, "director") instanceof Array).toBe(true);
    //  expect(filterDataDirector(datatest, "director")).toEqual(datatest.arrayContainingdatatest("Hayao Miyazaki"));
   });
   it('devuelve las animaciones del director', () => {
     const result = filterDataDirector(datatest, "Isao Takahata")

     expect(result).toEqual([ { "title": "Grave of the Fireflies", "director": "Isao Takahata"}]);
    //  expect(filterDataDirector(datatest, "director")).toEqual(datatest.arrayContainingdatatest("Hayao Miyazaki"));
   });
 });



