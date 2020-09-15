const crearobjeto=(nombre='sin definir',edad='sin definir')=>{
    return {
        nombre,
        edad,
        mostrarinfo(){ return ` ${nombre} tiene ${edad} años ` }
    }
}

console.log(crearobjeto('Emilio Rolando',32).mostrarinfo());