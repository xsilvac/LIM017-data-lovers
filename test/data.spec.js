import { filterDataDirector, filterDataProducer, sortData, joinCharacter, filterDataByGender, joinVehicles,
  dataOrderCharacter, filterDataSpecie, joinLocations} from '../src/data.js'

//Test para filtar el director
 const testDirector = [
   {director: "Gorō Miyazaki"},
   {director: "Hayao Miyazaki"},
   {director: "Hiromasa Yonebayashi"},
 ];
  describe('filterDataDirector', () => {
   it('devolver el nombre del director "Gorō Miyazaki"', () => {
     expect(filterDataDirector(testDirector, "Gorō Miyazaki")).toEqual([{director: "Gorō Miyazaki"}]);
   });});

 //Para filtar el productor
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
    });
  });

//Ordenar alfabéticamente por personaje
const charactersByOrder = [{name: "Lusheeta Toel Ul Laputa"}, {name: "Pazu"}, {name: "Dola"}];
const resultByOrder = [{name: "Dola"}, {name: "Lusheeta Toel Ul Laputa"}, {name: "Pazu"}]
describe("dataOrderCharacter", () =>{
  it("Deberia retornar los personajes por orden alfabetico", () =>{
    expect(dataOrderCharacter(charactersByOrder)).toEqual(resultByOrder);
  });
});

 // Test para Sort
const titleData = [{ title: "Castle in the Sky" },
                  { title: "Princess Mononoke" },
                  { title: "From Up on Poppy Hill" }];
 const titleAscendente = [{ title: "Castle in the Sky" },
                          { title: "From Up on Poppy Hill" },
                          { title: "Princess Mononoke" }];
 describe('sortData', () => {
   it("devolver la lista ordenada alfabéticamente de la az", () => {
     expect(sortData(titleData, "AZ")).toEqual(titleAscendente);
   });
 });

//Test para mostrar los personajes en pantalla
const characters = {
  "films": [{"title": "Castle in the Sky",
              "people": [{
                "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
                "name": "Pazu",}]},
            {"title": "My Neighbor Totoro",
              "people": [{
                "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
                "name": "Satsuki Kusakabe",}]}
]};
describe('joinCharacter', () => {
  it("devolver el total de personajes por película", () => {
    const result = joinCharacter(characters.films);
    expect(result.length).toBe(2);
  });
});

//Filtrar personajes por genero  -filterDataByGender-
const charactersByGender = {
  "films": [{"title": "Castle in the Sky",
              "people": [{"name": "Lusheeta Toel Ul Laputa",
                          "gender": "Female"}]},
            {"title": "My Neighbor Totoro",
              "people": [{"name": "Satsuki Kusakabe",
                          "gender": "Female"}]}
]};
describe('filterDataByGender', () => {
  it("devolver el total de personajes por genero", () => {
    const result = filterDataByGender(charactersByGender.films);
    expect(result.length).toBe(2);
});
});

// Filtrar vehículos -joinVehicles-
const vehicles = {
  "films": [{"title": "Castle in the Sky",
              "vehicles": [{"name": "Air Destroyer Goliath"}]},
            {"title": "Porco Rosso",
              "vehicles": [{"name": "Red Wing",}]}
]};
describe('joinVehicles', () => {
  it("devolver el total de personajes por genero", () => {
    const result = joinVehicles(vehicles.films);
    expect(result.length).toBe(2);
});
});

// Filtrar Locaciones  joinLocations
const locations = {
  "films": [{"title": "Castle in the Sky",
              "locations": [{"name": "Gondoa"}]},
            {"title": "Porco Rosso",
              "locations": [{"name": "Piccolo S.P.A."}]}
]};
describe('joinLocations', () => {
  it("devolver el total de personajes por genero", () => {
    const result = joinLocations(locations.films);
    expect(result.length).toBe(2);
});
});

