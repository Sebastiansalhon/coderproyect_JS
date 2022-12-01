let precio = 280
let ingrediente;




let name = prompt("Premaremos tu hamburgesa... ¿Cómo te llamas?");
let cantidadIngredientes = parseInt(
  prompt(name+" Cuantos ingredientes desea?(En números, máximo 3)")
);


switch (cantidadIngredientes) {
  case 1:
    alert("Elegiste 1 ingrediente")
    break;

  case 2:
    alert("Elegiste 2 ingredientes")
    break;

    case 3:
    alert("Elegiste 3 ingredientes")
    break;

    default:
        alert("Sin ingredientes extras")
}



if (cantidadIngredientes==1) {
     ingrediente = prompt("Ingresa el ingrediente deseado. (huevo, panceta, cebolla, morron, lechuga, tomate, queso o queso vegano.)")
}else if (cantidadIngredientes==2) {
    ingrediente = prompt("Ingresa tus 2 ingredientes (huevo, panceta, cebolla, morron, lechuga, tomate, queso o queso vegano.")
}else{
    ingrediente = prompt("Ingresa tus ingredientes (huevo, panceta, cebolla, morron, lechuga, tomate, queso o queso vegano.")
}

alert("Tus ingredientes son: "+ingrediente)

let cambioCarne = prompt("Desea hamburgesa vegana? (SI/NO)")

if (cambioCarne=="SI") {
    let carne = "doble hamburgesa vegana"
    alert ("Tu hamburgesa se está haciendo y quedará así: Pan, "+carne+" con tu eleccion de ingredientes: "+ingrediente)

}else{
    let carne = "2 carnes de 100gr c/u"
    alert ("Tu hamburgesa se está haciendo y quedará así: Pan, "+carne+" con tu eleccion de ingredientes: "+ingrediente)
}

let precioPorIngrediente = cantidadIngredientes * 20

function calcularTotal(precio, ingredientes) {
    total = precio + ingredientes
}
calcularTotal(precio,precioPorIngrediente)

alert("El precio de la hamburgesa sería: $ "+total)