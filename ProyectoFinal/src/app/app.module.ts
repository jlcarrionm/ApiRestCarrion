import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



import { ConcatenarNombreApellidoPipe } from './alumnos/pipes/concatenar-nombre-apellido.pipe';
import { TamanoTitulosDirective } from './alumnos/directives/tamano-titulos.directive';
import { EditarAlumnosDialogComponent } from './alumnos/components/editar-alumnos-dialog/editar-alumnos-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRountingModule } from './app-rounting.module';
import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { CursosModule } from './cursos/cursos.module';
import { AlumnosRountingModule } from './alumnos/alumnos-rounting.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursoService } from './cursos/services/cursos.service';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    NoEncontradoComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,

    AppRountingModule,
    CursosModule,
    AlumnosModule,
    CoreModule,
    SharedModule



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
