// estas funciones son de ejemplo

/*export const filterDataDirector = (data,condition) => {
  return data[condition]
  };

const data = data.filter(filter);

let dataString = JSON.stringify(data);
let parseData = JSON.parse(dataString);*/

export const dataOrder = (data, order) => {
  let titleSort = data.sort((a, z)=>{
   return (a.title > z.title) ? 1:-1;
   })
   console.log(titleSort);
   if(order === "ascendente"){titleSort}
   if(order === "descendente"){titleSort.reverse()}

   return titleSort;
}


