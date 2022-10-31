import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/personas/persona/persona.component';
import { FormularioComponent } from './componentes/personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './componentes/personas/personas.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoggingService,
    PersonasService
  ], // Se agrega el servicio a este nivel para que pueda ser usado en todos los componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
