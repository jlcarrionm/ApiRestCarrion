import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';


const routes: Routes = [
  { path: 'cursos', children: [
    { path: 'listarcursos', component: ListaCursosComponent },

  ]}
];

@NgModule({
 imports: [RouterModule.forChild (routes)],
  exports: [RouterModule]
})
export class CursosRountingModule { }
