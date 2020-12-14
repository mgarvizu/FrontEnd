import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonaComponent } from './persona/datos-persona/datos-persona.component';
import { EncabezadoPersonaComponent } from './persona/encabezado-persona/encabezado-persona.component';
import { SkillsPersonaComponent } from './persona/skills-persona/skills-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonaComponent,
    EncabezadoPersonaComponent,
    SkillsPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
