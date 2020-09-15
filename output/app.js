"use strict";

var _mensajeAlerta = require("./modulos/mensajeAlerta");

var _ClasePersona = _interopRequireDefault(require("./modulos/ClasePersona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mensajeAlerta.mensajeAleta)('Hola Rolando');
(0, _mensajeAlerta.saludo)();
var pedro = new _ClasePersona["default"]('Emilio Rolando Tellez', 34);
pedro.MostrarInfo();