const obj = {
  nombre: "Jesús",
  apellido: "Espartero",
  edad: 45,
  altura:180,
  eresDesarrollador: true
}

const age = obj.edad
console.log(age);

const lista = [{...obj} , {
  nombre: "Fernando",
  apellido: "Espartero",
  edad: 46,
  altura:160,
  eresDesarrollador: false
}, {
  nombre: "Juan",
  apellido: "Lozano",
  edad: 44,
  altura:180,
  eresDesarrollador: false
} ]

const listaSort = lista.sort((a , b)=> b.edad - a.edad)
console.log(listaSort);