/* clase persona se utiliza la primera letra capital para declarar las clases */
export default class Persona {
    /* constructor de la clase */
    constructor(nombre, edad){
        /* propiedades de la clase */
        this.nombre = nombre;
        this.edad = edad; 
    }
    /* metodo de la clase */
    MostrarInfo(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

/*para poder utilizar en el archivo clasePersona  */