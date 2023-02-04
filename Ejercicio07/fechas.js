const fechaHoy = new Date()
console.log(fechaHoy);

const cumpleaños = new Date(1976, 10, 24)
console.log(cumpleaños);

const fechaMayor = fechaHoy > cumpleaños

console.log(fechaMayor);

const diaNacimiento = cumpleaños.getDate()
const mesNacimiento = cumpleaños.getMonth() + 1
const añoNacimiento = cumpleaños.getFullYear()