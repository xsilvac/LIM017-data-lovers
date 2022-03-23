//Filtro para director
export const filterDataDirector = (data, filterDirector) => {
  const resultByDirector = data.filter(y => y.director === filterDirector);
  return resultByDirector;
};
export const filterDataProducer = (data, filterProducer) => {
  const resultByProducer = data.filter(y => y.producer === filterProducer);
  return resultByProducer;
};

export const sortData = (data, sortOrder) => {
  let titleSort = data.sort((a, z) => {
    return (a.title > z.title) ? -1 : 1;
  })
  if (sortOrder === 'titleDescending') { titleSort.reverse() }
  return titleSort, titleSort.reverse();
};

//Base de datos por personajes
export const joinCharacter = (data) => {
  const dataPersonajes = data.map((x) => x.people);
  const totalPersonajes = dataPersonajes.reduce((y, el) => y.concat(el), []);
  return totalPersonajes;
};
//filtrado por genero
export const filterDataByGender = (data, filterGender) => {
  const resultByGender = data.filter(y => y.gender === filterGender);
  return resultByGender;
};
//filtrado por especie
export const filterDataSpecie = (data, filterSpecie) => {
  const resultBySpecie = data.filter(x => x.specie === filterSpecie);
  return resultBySpecie;
};
//por orden
export const dataOrderCharacter = (data, order) => {
  let characterSort = data.sort((a, z) => {
    return (a.name > z.name) ? 1 : -1;
  })
  if (order === "des") { characterSort.reverse() }
  return characterSort;
};
// por nombre
export const joinVehicles = (data) => {
  const dataVehicles = data.map((x) => x.vehicles);
  const totalVehicles = dataVehicles.reduce((y, el) => y.concat(el), []);
  return totalVehicles;
};

export const joinLocations = (data) => {
  const dataLocations = data.map((x) => x.locations);
  const totalLocations = dataLocations.reduce((y, el) => y.concat(el), []);
  return totalLocations;
};

export const computeStats = (x, data) => {
  if (x == "rtScore") {
    const dataFilmsOrder = data.sort((a, b) => b.rt_score - a.rt_score);
    return dataFilmsOrder;
  }
};

export const  computeStatsTwo = (data, nameDirector) =>{
  const moviesByDirector = (data.filter(y => y.director === nameDirector));
  const count = moviesByDirector.length;
  const percent = Math.round((count / data.length)*100);
  return percent;
};
