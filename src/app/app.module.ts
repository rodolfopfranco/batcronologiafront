import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import { CronologiaComponent } from './cronologia/cronologia.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { SobreComponent } from './sobre/sobre.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TopMenuComponent,
    CronologiaComponent,
    PersonagensComponent,
    ArtistasComponent,
    SobreComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
