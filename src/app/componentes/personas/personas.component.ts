import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
              private personasService: PersonasService,
              private router : Router) {} // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

  ngOnInit(): void {  // se ejecuta cuando se carga el componente
    this.personas = this.personasService.personas;
  }   

  agregar(){
    this.router.navigate(['personas','agregar'])
    // forma 2:
    //this.router.navigate(['personas/agregar'])
  }

}
