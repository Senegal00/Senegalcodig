//Rest 
/* const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('Emilio',32, 'correo@correo.com','Nicaragua'); */


//Spread
const mostrarDatos = (...datos) => {
    console.log(datos);
}
const arrayDatos = ['Emilio',32, 'correo@correo.com','Nicaragua'];
mostrarDatos(...arrayDatos);