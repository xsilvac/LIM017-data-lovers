 import { filterDataDirector } from '../src/data.js';

 const datatest = [
       { "title": "Porco Rosso",
         "director": "Hayao Miyazaki"
       },
       { "title": "Grave of the Fireflies",
       "director": "Isao Takahata"},
 ]

 describe('filterDataDirector', () => {
   it('devolver las animaciones según el director', () => {
     expect(filterDataDirector(datatest, "director")).toEqual(datatest.arrayContainingdatatest("Hayao Miyazaki"));
   });
 });



