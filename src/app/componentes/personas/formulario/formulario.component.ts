import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from 'src/app/LoggingService.service';
import { Persona } from 'src/app/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService] // Se agrega el servicio al componente (ya está en app.module.ts)
})
export class FormularioComponent {

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


  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice : number) => alert("El indice es: " + indice));
              }  // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

/*   @ViewChild ('nombreInput') nombreInput: ElementRef; // ElementRef es un tipo de dato que permite acceder a los elementos del DOM
  @ViewChild ('apellidoInput') apellidoInput: ElementRef; */

  public agregarPersona(){
    if(this.nombreInput != '' && this.apellidoInput != ''){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      // NativeElement es una propiedad que permite acceder al valor del elemento del DOM
      //this.personas.push(persona1);
      //this.personaCreada.emit(persona1); // Hace algo como un return de la persona creada al componente padre
      // En resumidas palabras, emite la persona creada al componente padre
      this.personasService.agregarPersona(persona1);
    }else{
      alert('Debe ingresar los datos');
    }
  }

}
