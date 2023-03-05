import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';


const routes: Routes = [
  { path: 'alumnos', children: [
    { path: 'listaralumnos', component: ListaAlumnosComponent },

  ]}
];

@NgModule({
 imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class AlumnosRountingModule { }
