import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';


import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';

// localhost:4200/login -> login.component
// localhost:4200/inicio -> inicio.component
const routes: Routes = [
  {path: 'inicio', component: ListaAlumnosComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
 /*  {path: '**', component: NoEncontradoComponent } */
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
