"use strict";

var crearobjeto = function crearobjeto() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'sin definir';
  var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sin definir';
  return {
    nombre: nombre,
    edad: edad,
    mostrarinfo: function mostrarinfo() {
      return " ".concat(nombre, " tiene ").concat(edad, " a\xF1os ");
    }
  };
};

console.log(crearobjeto('Emilio Rolando', 32).mostrarinfo());