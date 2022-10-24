import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  /*  @Output permite enviar datos al componente padre
      EventEmitter en este caso lo que hace es como un canal de comunicación entre el componente hijo y el padre
      PersonaCreada es el nombre del canal de comunicación
      Persona es el tipo de dato que se va a enviar
      new EventEmitter<Persona>() es la instancia del canal de comunicación;

      Sintaxis:
        @Output() nombreDelCanal = new EventEmitter<TipoDeDatos>();
        El tipo de dato puede ser un objeto, un array, un string, etc.
        Un ejemplo de un canal de comunicación que envía un string sería:
        @Output() nombreDelCanal = new EventEmitter<string>();
  */
  nombreInput: string = '';
  apellidoInput: string = '';

  public agregarPersona(){
    if(this.nombreInput != '' && this.apellidoInput != ''){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      //this.personas.push(persona1);
      this.personaCreada.emit(persona1); // Hace algo como un return de la persona creada al componente padre
      // En resumidas palabras, emite la persona creada al componente padre
    }else{
      alert('Debe ingresar los datos');
    }

  }

}
