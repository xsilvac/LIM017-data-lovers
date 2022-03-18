import { it } from 'eslint/lib/rule-tester/rule-tester';
import { filterDataDirector, filterDataProducer, filterDataSpecie, dataOrderCharacter} from '../src/data.js';

const testDirector = [
  {director: "Gorō Miyazaki"},
  {director: "Hayao Miyazaki"},
  {director: "Hiromasa Yonebayashi"},
]
 describe('filterDataDirector', () => {
  it('devolver el nombre del director "Gorō Miyazaki"', () => {
    expect(filterDataDirector(testDirector, "Gorō Miyazaki")).toEqual([{director: "Gorō Miyazaki"}]);
  });
});

const testProducer = [
  {producer: "Toru Hara"},
  {producer: "Toshio Suzuki"},
  {producer: "Yoshiaki Nishimura"},
]
describe('filterDataProducer', () => {
  it('devolver el nombre del producer "Toru Hara"', () => {
    expect(filterDataProducer(testProducer, "Toru Hara")).toEqual([{producer: "Toru Hara"}]);
  });
});

//Filtrar por genero  -filterDataByGender-

// const charactersByGender = {
//   "films": [{"title": "Castle in the Sky",
//               "people": [{"name": "Lusheeta Toel Ul Laputa",
//                           "gender": "Female"}]},
//             {"title": "My Neighbor Totoro",
//               "people": [{"name": "Satsuki Kusakabe",
//                           "gender": "Female"}]}
// ]};

// describe('filterDataByGender', () => {
//   it("devolver el total de personajes por genero", () => {
//     const result = filterDataByGender(charactersByGender.films);
//     expect(result.length).toBe(2);
// });
// });
//Filtrar por especies

const charactersBySpecie = {
  "films": [{"title": "Castle in the Sky",
                "people": [{"name": "Lusheeta Toel Ul Laputa",
                            "specie": "Human"}]},
            {"title": "My Neighbor Totoro",
                "people": [{"name": "Satsuki Kusakabe",
                            "specie": "Human"}]}
  ]};

  describe('filterDataSpecie', () =>{
    it('Devolver el total de personaje por especie', () =>{
      expect((filterDataSpecie(charactersBySpecie.films)).length).toBe(2);
    })
  })

//Ordenar alfabeticamente por personaje

const charactersByOrder = [{name: "Lusheeta Toel Ul Laputa"}, {name: "Pazu"}, {name: "Dola"}];
const resultByOrder = [{name: "Dola"}, {name: "Lusheeta Toel Ul Laputa"}, {name: "Pazu"}]

describe("dataOrderCharacter", () =>{
  it("Deberia retornar los personajes por orden alfabetico", () =>{
    expect(dataOrderCharacter(charactersByOrder)).toEqual(resultByOrder);
  })
})


