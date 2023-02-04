const listaCompra = ["pan", "leche", "queso", "carne", "pescado"]

listaCompra.push(" aceite de girasol")

console.log(listaCompra);

listaCompra.pop(" aceite de girasol")
console.log(listaCompra);

const listaPeli = [
  {titulo:"Avatar", director: "James Cameron", año: 2009},
  {titulo: "Sherlock Holmes", director: "Guy Ritchie", año: 2009},
  {titulo: "El padre", director: "Florian Zeller", año: 2020}
]

const newLista = listaPeli.filter(obj => obj.año > 2010)
console.log(newLista);


const directores = listaPeli.map(obj => obj.director )
console.log(directores);

const titulos = listaPeli.map(obj => obj.titulo )
console.log(titulos);

const newListaPelis = directores.concat(titulos)
console.log(newListaPelis);

const propagacion = [...directores, ...titulos]
console.log(propagacion);