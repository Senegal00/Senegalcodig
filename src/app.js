
import { mensajeAleta, saludo } from "./modulos/mensajeAlerta";
import Persona from "./modulos/ClasePersona";

mensajeAleta('Hola Rolando');
saludo();

const pedro = new Persona('Emilio Rolando Tellez', 34);
pedro.MostrarInfo();