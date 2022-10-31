import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './componentes/personas/personas.component';
import { FormularioComponent } from './componentes/personas/formulario/formulario.component';

const routes:  Routes = [
  { path: '', component: PersonasComponent, pathMatch: 'full'},   // pathMatch: 'full' es para que solo se muestre el componente cuando la ruta sea exactamente igual a la ruta del compnente
  { path: 'personas', component: PersonasComponent, pathMatch: 'full'},
  { path: 'personas/agregar', component: FormularioComponent, pathMatch: 'full'},
  { path: 'personas/:id', component: FormularioComponent, pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
