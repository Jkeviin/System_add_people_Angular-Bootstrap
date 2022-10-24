import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService) {} // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

  ngOnInit(): void {  // se ejecuta cuando se carga el componente
    this.personas = this.personasService.personas;
  }

}
