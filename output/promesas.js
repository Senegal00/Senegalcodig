"use strict";

/* cuando se declare, Promise con este formato */
var promesa = new Promise(function (resolve, reject) {
  //
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve("Exito todo esta bien");
    } else {
      reject("Hay un error en el codigo");
    }
  }, 4000);
});
/* resolve */

promesa.then(function (mensaje) {
  /* console.log("Exito"); */
  alert(mensaje);
});
/*  reject */

promesa["catch"](function (mensaje) {
  /* console.log("Hay un error en el codigo"); */
  alert(mensaje);
});