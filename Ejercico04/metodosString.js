let nombre = "Jesús"
let apellido = "Espartero"

let estudiante = nombre + " " + apellido
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus);

const caracteres = estudiante.length
console.log(caracteres);

const primeraNombre = nombre[0]
console.log(primeraNombre);


const finalApellido = apellido [apellido.length -1]
console.log(finalApellido);

const sinEspacios = estudiante.replace(" ", "")
console.log(sinEspacios);

const booleana = estudiante.includes(nombre)
console.log(booleana);