let contactos = [
  {
    id: 1,
    nombres: "Jose",
    apellidos:"Sol",
    telefono:"88995544",
    ubicaciones: {
      ciudad: "Yoro",
      colonia: "San Juan"
    }
  },
  {
    id: 2,
    nombres: "Saul",
    apellidos:"Paz",
    telefono:"98562314",
    ubicaciones: {
      ciudad: "La lima",
      colonia: "Trejo"
    }
  },
  {
    id: 3,
    nombres: "Alex",
    apellidos:"Martinez",
    telefono:"12547863",
    ubicaciones: {
      ciudad: "Colon",
      colonia: "Jazminez"
    }
  },
  {
    id: 4,
    nombres: "Andrea",
    apellidos:"Rodriguez",
    telefono:"88556523",
    ubicaciones: {
      ciudad: "San Pedro",
      colonia: "Aurora"
    }
  },
  {
    id: 5,
    nombres: "Brayan ",
    apellidos:"Castro",
    telefono:"88895663",
    ubicaciones: {
      ciudad: "Atlantidad",
      colonia: "Ceiba"
    }
  },
  {
   id: 6,
   nombres: "Elena",
   apellidos:"Lainez",
   telefono:"99556823",
   ubicaciones:{
     ciudad:"El Progreso",
     colonia:"Castaño"
   }
  },
  {
   id: 7,
   nombres: "Liz",
   apellidos:"Trochez",
   telefono:"98546325",
   ubicaciones:{
     ciudad:"Tegucigalpa",
     colonia:"Sauce"
   }
 }
];


function agregarContacto(id, nombres, apellidos, telefono, ciudad, colonia, contactos) {
  let nuevoContacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicaciones:{
      ciudad,
      colonia
    }
  };
  
  return [...contactos, nuevoContacto];
}

function eliminarContacto(id, contactos) {
  return contactos.filter(contacto => contacto.id !== id);
}

// Ejemplo de uso de la función para agregar un nuevo contacto
contactos = agregarContacto(8, 'Emely', 'Farach', '85741236', 'Trujillo', 'Llave en Mano', contactos);

// Ejemplo de uso de la función para eliminar un contacto por ID
contactos = eliminarContacto(2, contactos);

console.log(contactos);
