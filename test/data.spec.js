import { filterDataDirector, filterDataProducer, sortData, filterTitleSearch, joinCharacter, filterDataByGender, joinVehicles, joinLocations } from '../src/data.js';
/* import {data} from "../src/data/ghibli/ghibli.js" */

//Test para filtar el director
const testDirector = [
  { director: "Gorō Miyazaki" },
  { director: "Hayao Miyazaki" },
  { director: "Hiromasa Yonebayashi" },
];

describe('filterDataProducer', () => {
it('devolver el nombre del director "Gorō Miyazaki"', () => {
  expect(filterDataDirector(testDirector, "Gorō Miyazaki")).toEqual([{ director: "Gorō Miyazaki" }]);
});
});

// Para filtar el productor
const testProducer = [
  { producer: "Toru Hara" },
  { producer: "Toshio Suzuki" },
  { producer: "Yoshiaki Nishimura" },
];

describe('filterDataProducer', () => {
  it('devolver el nombre del producer "Toru Hara"', () => {
    expect(filterDataProducer(testProducer, "Toru Hara")).toEqual([{ producer: "Toru Hara" }]);
  });
});

// Test para Sort

const titleData = [
  { title: "Castle in the Sky" },
  { title: "Princess Mononoke" },
  { title: "From Up on Poppy Hill" }
];

const titleAscendente = [
  { title: "Castle in the Sky" },
  { title: "From Up on Poppy Hill" },
  { title: "Princess Mononoke" }
];

describe('sortData', () => {
  it("devolver la lista ordenada alfabéticamente de la az", () => {
    expect(sortData(titleData, "AZ")).toEqual(titleAscendente);
  });
});


//Test para mostrar las películas en pantalla al ingresar coincidencia en el buscador
const titleData_post =[ {
  "films": [
    {"title": "castle in the sky"},
    {"title": "pom poko"}
  ]
}];

describe.skip('filterTitleSearch', () => {
  it("Deberia retornar la película en pantalla", () => {
    expect(filterTitleSearch(titleData_post) instanceof Array).toBe(true);
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

//Filtrar por genero  -filterDataByGender-

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

// Filtrar por vehículos -joinVehicles-
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

// Filtrar por Locaciones  joinLocations
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

