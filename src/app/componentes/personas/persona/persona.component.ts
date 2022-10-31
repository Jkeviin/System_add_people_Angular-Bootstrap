import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  implements OnInit{

  @Input() persona: Persona;  // @input permite recibir datos desde el componente padre
  @Input() indice: number;

  constructor(private personasService: PersonasService){}
  
  ngOnInit(): void {
  }

  public emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }

}
