import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService} from './LoggingService.service';

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

    constructor(private loggingService: LoggingService){}  // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

    public personaAgregada(persona : Persona){  // Recibe la persona creada en el componente hijo
      this.personas.push(persona);
      this.loggingService.enviarMensajeAConsola(`Enviamos desde el componente padre persona con nombre: ${persona.nombre}`);
    }
}
