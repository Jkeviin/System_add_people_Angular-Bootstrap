import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from 'src/app/LoggingService.service';
import { Persona } from 'src/app/persona.model';
import { PersonasService } from 'src/app/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService] // Se agrega el servicio al componente (ya está en app.module.ts)
})
export class FormularioComponent implements OnInit {

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
  index : number = 0;


  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute){
                this.personasService.saludar.subscribe(
                  (indice : number) => alert("El indice es: " + indice));  // subscribe en breves palabras, es un método que se ejecuta cuando se emite un evento y recibe un parámetro que es el dato que se envía
              }  // Se agrega el servicio al constructor para poder usarlo, de lo contrario no se podria usar en el componente

/*   @ViewChild ('nombreInput') nombreInput: ElementRef; // ElementRef es un tipo de dato que permite acceder a los elementos del DOM
  @ViewChild ('apellidoInput') apellidoInput: ElementRef; */

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']; // Se obtiene el parámetro id de la ruta actual (se obtiene el id de la persona que se va a editar)
    // snapshot es una propiedad que permite obtener el valor del parámetro de la ruta
    if(this.index){
      let persona : Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }

  }

  public onGuardarPersona(){
      let persona1 = new Persona(this.nombreInput, this.apellidoInput);
      if(this.index){
        this.personasService.modificarPersona(this.index, persona1);
      }
      else{
        this.personasService.agregarPersona(persona1);
      }
      this.router.navigate(['personas']);
  }

  public onEliminarPersona(index: number){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
