const precioCarne = 280;
const precioVeggie = 5000;
const precioPorIngrediente = 25;
let ingrediente;
const ingredientesDisponibles = [
  "Huevo",
  "Morron",
  "Panceta",
  "Lechuga",
  "Tomate",
  "Queso",
  "Queso Vegano",
  "Cebolla"
];
const mensajeIngredientes = "Ingrese los ingredientes que desea separados por comas Ej:(Huevo,Morron): \nHuevo\nCebolla\nMorron\nLechuga\nTomate\nQueso\nQueso Vegano";

let name = prompt("Premaremos tu hamburgesa... ¿Cómo te llamas?"); 


ingrediente = mostrarMensajeIngredientes();
let ingredientesIngresados = ingrediente.split(','); // array



let textoIngredientes = '';

ingredientesIngresados.forEach((ingrediente)=>{
  ingrediente = ingrediente.trim();
  ingrediente = ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1);
  if(ingredientesDisponibles.includes(ingrediente)){
    textoIngredientes += '\n' + ingrediente;
  }else{
    alert(`El ingrediente ${ingrediente} no esta disponible.`);
  }
  
});

alert(`Tus ingredientes son ${textoIngredientes}`)

let veggie = confirm("Desea carne vegana?")
if (veggie){
    alert(`Tu hamburgesa se esta preparando. \nTu hamburguesa Veggie tiene los siguientes ingredientes: \n${textoIngredientes} `);
}
else{
  alert(`Tu hamburguesa de 100gr de carne se esta preparando con los siguientes ingredientes: \n${textoIngredientes}`);
}


let precioPorIngredientes = ingredientesIngresados.length * precioPorIngrediente



alert("El precio de la hamburgesa sería: $ "+calcularTotal(precioPorIngredientes,veggie))

//Funciones
function mostrarMensajeIngredientes(){
  return prompt(mensajeIngredientes)
}

function calcularTotal(precioPorIngredientes, esVeggie) {
  let total = precioPorIngredientes;
  if (esVeggie) {
    total += precioVeggie;
  }else{
    total += precioCarne;
  }
  return total;
}