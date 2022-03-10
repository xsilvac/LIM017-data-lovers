export const filterDataDirector = (data, filterDirector) => {
  const resultByDirector = data.filter(y => y.director === filterDirector);
  return resultByDirector;
};


// export const dataOrder = (data, order) => {
//   let titleSort = data.sort((a, z)=>{
//    return (a.title > z.title) ? 1:-1;
//    })
//    if(order === "ascendente"){titleSort}
//    if(order === "descendente"){titleSort.reverse()}

//    return titleSort;
// }

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
export const joinCharacter = (data) => {
  const dataPersonajes = data.map((x) => x.people);
  const totalPersonajes = dataPersonajes.reduce((y, el) => y.concat(el), []);
  return totalPersonajes;
}