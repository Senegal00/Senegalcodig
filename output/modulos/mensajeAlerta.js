"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = exports.mensajeAleta = void 0;

var mensajeAleta = function mensajeAleta(mensaje) {
  alert(mensaje);
};

exports.mensajeAleta = mensajeAleta;

var saludo = function saludo() {
  console.log("Como estas?");
};

exports.saludo = saludo;