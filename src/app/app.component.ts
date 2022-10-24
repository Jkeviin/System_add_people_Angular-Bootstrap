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
  nombreInput: string = '';
  apellidoInput: string = '';

  public agregarPersona(){
    if(this.nombreInput != '' && this.apellidoInput != ''){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      this.personas.push(persona1);
    }else{
      alert('Debe ingresar los datos');
    }

  }
}
