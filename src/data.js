export const filterDataDirector = (data, filterDirector) => {
  const resultByDirector = data.filter(y => y.director === filterDirector);
  return resultByDirector;
};
export const filterDataProducer = (data, filterProducer) => {
  const resultByProducer = data.filter(y => y.producer === filterProducer);
  return resultByProducer;
};
export const filterTitle = (data, x, y) => {
  const resultFilterTitle = data.filter(item => item[x].toLowerCase().includes(y.toLowerCase()));
  return resultFilterTitle;
}
export const sortData = (data, sortBy, sortOrder) => {
  const resultOrder = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }
    else if (a[sortBy] < b[sortBy]) {
      return 1;
    }
    else {
      return 0;
    }
  });
  if (sortOrder === "titleDescending") {
    return resultOrder.reverse();
  }
  return resultOrder, resultOrder.reverse();
}


//Base de datos por personajes
export const joinCharacter = (data) => {
  const dataPersonajes = data.map((x) => x.people);
  const totalPersonajes = dataPersonajes.reduce((y, el) => y.concat(el), []);
  return totalPersonajes;
}
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
// por titulo
export const filterName = (data, x, a) => {
  const resultFilterName = data.filter(el => el[x].toLowerCase().includes(a.toLowerCase()));
  return resultFilterName;
}

export const joinVehicles = (data) => {
  const dataVehicles = data.map((x) => x.vehicles);
  const totalVehicles = dataVehicles.reduce((y, el) => y.concat(el), []);
  return totalVehicles;
}

export const joinLocations = (data) => {
  const dataLocations = data.map((x) => x.locations);
  const totalLocations = dataLocations.reduce((y, el) => y.concat(el), []);
  return totalLocations;
}