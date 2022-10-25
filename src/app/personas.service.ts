import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable() // Esto es para que se pueda inyectar el servicio en otros componentes, en pocas palabras, para que se pueda usar en otros componentes
export class PersonasService {
    personas: Persona[] = [
        new Persona('Kevin', 'Ortega'),
        new Persona('Daniel', 'Alvares')
    ];

    saludar = new EventEmitter <number>();

    constructor (private loggingService: LoggingService){}

    public agregarPersona(persona: Persona) {
        // Recibe la persona creada en el componente hijo
        this.loggingService.enviarMensajeAConsola(`Enviamos persona con nombre: ${persona.nombre} y apellido: ${persona.apellido}`) ;
        this.personas.push(persona);
    }
}