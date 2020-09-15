/* cuando se declare, Promise con este formato */
const promesa=new Promise((resolve, reject)=>{
    //
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("Exito todo esta bien");
        } else {
            reject("Hay un error en el codigo");
        }
    }, 4000);
});

/* resolve */
promesa.then((mensaje)=>{
    /* console.log("Exito"); */
    alert(mensaje);
});

/*  reject */
promesa.catch((mensaje)=>{
    /* console.log("Hay un error en el codigo"); */
    alert(mensaje);
});