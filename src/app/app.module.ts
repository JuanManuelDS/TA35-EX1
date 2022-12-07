import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AltaComponent, ListadoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
