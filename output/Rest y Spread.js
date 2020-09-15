"use strict";

//Rest 

/* const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('Emilio',32, 'correo@correo.com','Nicaragua'); */
//Spread
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

var arrayDatos = ['Emilio', 32, 'correo@correo.com', 'Nicaragua'];
mostrarDatos.apply(void 0, arrayDatos);