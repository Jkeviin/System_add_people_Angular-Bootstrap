import { Persona } from "./persona.model";

export class PersonasService {
    personas: Persona[] = [
        new Persona('Kevin', 'Ortega'),
        new Persona('Daniel', 'Alvares')
    ];

    public agregarPersona(persona: Persona) {
        // Recibe la persona creada en el componente hijo
        this.personas.push(persona);
    }
}