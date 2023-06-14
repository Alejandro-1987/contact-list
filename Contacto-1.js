
//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre 
//y apellido como una sola cadena de caracteres

let contactos =[
    "Jose Sol",
    "Saul Paz",
    "Alex Martinez",
    "Andrea Rodriguez",
    "Brayan Castro",
    "Elena Lainez",
    "Marvin Lopez",
    "Kevin Hernandez",
    "Alejandro Catan",
    "Hellen Sevilla",
    "Brandon Orellana",
    "Karla Flores",
    "Yenni Funez",
    "Kaleb Lara",
    "Liz Trochez",
];



//funcion agregar contacto(push sirve para agregar caracter)
function agregarContacto(contacto) {
  contactos.push(contacto);
}

agregarContacto("Juan Perez");

console.log(contactos);

 // funcion borra contacto

 function deleteContactos(borrar) {
contactos.splice(borrar,2);
 }
//deleteContactos(2);
//console.log(contactos);


 //Imprimir
 function imprimirContactos() {
    console.log(contactos);
  }
  imprimirContactos();