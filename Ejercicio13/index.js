const nombre = "Gorka"
const apellido = "Villar"
const estudiante = nombre.concat(" ").concat(apellido)

// eslint-disable-next-line no-unused-vars
const estudianteMayus = estudiante.toUpperCase()
// eslint-disable-next-line no-unused-vars
const estudianteMinus = estudiante.toLowerCase()

// eslint-disable-next-line no-unused-vars
const estudianteLength = estudiante.length

// Todas válidas
// const inicialNombre = nombre[0]
// const inicialNombre = nombre.at(0)
// eslint-disable-next-line no-unused-vars
const inicialNombre = nombre.substring(0, 1)
// Todas válidas
// const finalApellido = apellido[apellido.length - 1]
// const finalApellido = nombre.at(apellido.length - 1)
// eslint-disable-next-line no-unused-vars
const finalApellido = apellido.substring(apellido.length - 1, apellido.length)

// Todas válidas
// const estudianteSinEspacios = estudiante.replace(" ", "")
// eslint-disable-next-line no-unused-vars
const estudianteSinEspacios = estudiante.replace(/ /g, "")

// eslint-disable-next-line no-unused-vars
const nombreEnEstudiante = estudiante.includes(nombre)