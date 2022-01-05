import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Moduls
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

//Angular Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY80HTWiwIwuD8uJsIjry0RL4eh_GRbo0',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
