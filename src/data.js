// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const sortDataTitles = (data, sortOrder) => {
  let sortBy;
  if (sortOrder === 'az') {
    sortBy = data.sort((a, b) => {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    });
  } else if (sortOrder === 'za') {
    sortBy = data.sort((a, b) => {
      if (a.title > b.title) { return -1; }
      if (a.title < b.title) { return 1; }
      return 0;
    });
  }
  sortBy.forEach((e) => {
    console.log(`${e.title} ${e.director} ${e.producer} ${e.release_deate}`);
  });
  return sortBy;
};

//CONTENIDO SEGUN README

/*
FUNCIONES RECOMENDADAS
-filterData(data,condition)---filtra data---retorna datos solicitados
-sortData(data,sortBy, sortOrder)---ordena datos
-computeStats(data)---cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.()
*/


