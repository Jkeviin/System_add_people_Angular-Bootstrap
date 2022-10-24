import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [
      new Persona('Kevin', 'Ortega'),
      new Persona('Juan', 'Perez'),
      new Persona('Daniel', 'Alvares')
    ];

    public personaAgregada(persona : Persona){  // Recibe la persona creada en el componente hijo
      this.personas.push(persona);
    }
}
