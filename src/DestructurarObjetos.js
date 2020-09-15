const usuario = {
    nombre:"Emilio Rolando Tellez",
    Correo:"Correo@correo.com",
    edad:33,
    nacionalidad:"Nicaraguense",
    profesion:"Diseñador Web"
}
const {nombre, Correo,profesion}=usuario;
const mostarinfo=({nombre, profesion="Estudiente"})=>console.log(`${nombre} es ${profesion}`);
mostarinfo(usuario);
