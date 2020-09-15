"use strict";

var usuario = {
  nombre: "Emilio Rolando Tellez",
  Correo: "Correo@correo.com",
  edad: 33,
  nacionalidad: "Nicaraguense",
  profesion: "Diseñador Web"
};
var nombre = usuario.nombre,
    Correo = usuario.Correo,
    profesion = usuario.profesion;

var mostarinfo = function mostarinfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? "Estudiente" : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostarinfo(usuario);