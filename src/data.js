export const filterDataDirector = (data, filterDirector) => {
  const resultByDirector = data.filter(y => y.director === filterDirector);
  return resultByDirector;
};

export const filterDataProducer = (data, filterProducer) => {
  const resultByProducer = data.filter(y => y.producer === filterProducer);
  return resultByProducer;
};

export const sortData = (data, sortBy, sortOrder) => {
  const resultOrder = data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    else if (a[sortBy] > b[sortBy]) {
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

export const filterTitle = (data, x, y) => {
  const resultFilterTitle = data.filter(item => item[x].toLowerCase().includes(y.toLowerCase()));
  return resultFilterTitle;
}

    // export const filterDataCharacters = (data, filterCharacters) => {
    //   const resultByCharacters= data.filter(y => y.people === filterCharacters);
    //   return resultByCharacters;
    // 