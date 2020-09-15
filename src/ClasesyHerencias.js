/* para deficir una clase la primera  letra tiene que ser mayuscula */
class Usuario {
    /* se crea el constructor por defecto de la clase */
    constructor(nombre,edad,correo){/* propiedades/variables de la clase */
        this.nombre=nombre,
        this.edad=edad,
        this.correo=correo
    }
    /* se puede crear un metodo/funciones para modificar de forma dinamica las propiedades de la clase */
    mostarsaludo(mensaje){return mensaje;}
    mostarinfo(){
        return `
        <b>Nombre:</b> ${this.nombre} <br />
        <b>Edad:</b> ${this.edad} <br />
        <b>Correo:</b> ${this.correo} <br />
        <hr />
        `;
    }
}

const carlos = new Usuario("Emilio Rolando",32,"correo@correo.com"); //creamos la instancia del usuario.
/* document.writeln(carlos.mostarsaludo("hola mundo")); */
document.writeln(carlos.mostarinfo());

/* para utilizar la herencia hay que usar extends e incluir super en el constructor de la clase*/
class Estudiente extends Usuario { /* hereda todas las propiedades y metodos */
    constructor(nombre,edad,correo,carrera){
        super(nombre,edad,correo);
        this.carrera=carrera;
    }
    mostarinfo(){
        return `
        <b>Nombre:</b> ${this.nombre} <br />
        <b>Edad:</b> ${this.edad} <br />
        <b>Correo:</b> ${this.correo} <br />
        <b>Carrera:</b> ${this.carrera} <br />
        <hr />
        `;
    }
}

const alejandro=new Estudiente('Alejandro',23,'ejemplo@correo.com','Desarrollador Web');
document.writeln(alejandro.mostarinfo());