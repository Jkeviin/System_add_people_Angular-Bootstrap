import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/LoggingService.service';
import { Persona } from 'src/app/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService) {} // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

  ngOnInit(): void {  // se ejecuta cuando se carga el componente
    this.personas = this.personasService.personas;
  }

}
