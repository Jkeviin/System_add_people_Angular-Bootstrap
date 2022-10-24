import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggingService], // Se agrega el servicio a este nivel para que pueda ser usado en todos los componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
