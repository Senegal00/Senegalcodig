"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* para deficir una clase la primera  letra tiene que ser mayuscula */
var Usuario = /*#__PURE__*/function () {
  /* se crea el constructor por defecto de la clase */
  function Usuario(nombre, edad, correo) {
    _classCallCheck(this, Usuario);

    /* propiedades/variables de la clase */
    this.nombre = nombre, this.edad = edad, this.correo = correo;
  }
  /* se puede crear un metodo/funciones para modificar de forma dinamica las propiedades de la clase */


  _createClass(Usuario, [{
    key: "mostarsaludo",
    value: function mostarsaludo(mensaje) {
      return mensaje;
    }
  }, {
    key: "mostarinfo",
    value: function mostarinfo() {
      return "\n        <b>Nombre:</b> ".concat(this.nombre, " <br />\n        <b>Edad:</b> ").concat(this.edad, " <br />\n        <b>Correo:</b> ").concat(this.correo, " <br />\n        <hr />\n        ");
    }
  }]);

  return Usuario;
}();

var carlos = new Usuario("Emilio Rolando", 32, "correo@correo.com"); //creamos la instancia del usuario.

/* document.writeln(carlos.mostarsaludo("hola mundo")); */

document.writeln(carlos.mostarinfo());
/* para utilizar la herencia hay que usar extends e incluir super en el constructor de la clase*/

var Estudiente = /*#__PURE__*/function (_Usuario) {
  _inherits(Estudiente, _Usuario);

  /* hereda todas las propiedades y metodos */
  function Estudiente(nombre, edad, correo, carrera) {
    var _this;

    _classCallCheck(this, Estudiente);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Estudiente).call(this, nombre, edad, correo));
    _this.carrera = carrera;
    return _this;
  }

  _createClass(Estudiente, [{
    key: "mostarinfo",
    value: function mostarinfo() {
      return "\n        <b>Nombre:</b> ".concat(this.nombre, " <br />\n        <b>Edad:</b> ").concat(this.edad, " <br />\n        <b>Correo:</b> ").concat(this.correo, " <br />\n        <b>Carrera:</b> ").concat(this.carrera, " <br />\n        <hr />\n        ");
    }
  }]);

  return Estudiente;
}(Usuario);

var alejandro = new Estudiente('Alejandro', 23, 'ejemplo@correo.com', 'Desarrollador Web');
document.writeln(alejandro.mostarinfo());