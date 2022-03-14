export const filterDataDirector = (data, filterDirector) => {
  const resultByDirector = data.filter(y => y.director === filterDirector);
  return resultByDirector;
};


 /* export const dataOrder = (data, order) => {
   let titleSort = data.sort((a, z)=>{
    return (a.title > z.title) ? 1:-1;
    })
    if(order === "ascendente"){titleSort}
    if(order === "descendente"){titleSort.reverse()}

    return titleSort;
 }; */

export const filterDataProducer = (data, filterProducer) => {
  const resultByProducer = data.filter(y => y.producer === filterProducer);
  return resultByProducer;
};

 export const filterTitleSearch = (data, x, y) => {
  const resultFilterTitle = data.filter(item => item[x].toLowerCase().includes(y.toLowerCase()));
 // el parametro y no tenía información por eso eliminé (y).includes
  return resultFilterTitle;
  
};


export const sortData = (data, sortOrder)=>{
  let titleSort = data.sort((a,z)=>{
    return (a.title > z.title) ? -1:1;
  })
  // console.log(titleSort)
  if(sortOrder === 'titleDescending'){titleSort.reverse()}
  return titleSort, titleSort.reverse();
}

/*La función que generó Ximena
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
};*/

export const joinCharacter = (data) => {
  const dataPersonajes = data.map((x) => x.people);
  const totalPersonajes = dataPersonajes.reduce((y, el) => y.concat(el), []);
  return totalPersonajes;
};

export const filterDataByGender = (data, filterGender) => {
  const resultByGender = data.filter(y => y.gender === filterGender);
  return resultByGender;
};

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
