"use strict";

var _mensajeAlerta = require("./modulos/mensajeAlerta");

var _ClasePersona = _interopRequireDefault(require("./modulos/ClasePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newLocal = 'Emilio Rolando Tellez';
/* mensajeAleta('Hola Rolando');
saludo(); */

var pedro = new _ClasePersona["default"]('Emilio Rolando Tellez', 34);
/* console.log(pedro.edad); */

pedro.MostrarInfo();