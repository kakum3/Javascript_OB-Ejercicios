const boton = document.querySelector("button")

boton.addEventListener("click", () => {
  alert("click en el boton")
})

$("button").click(function(){
  console.log("Hola,con JQuery");
})