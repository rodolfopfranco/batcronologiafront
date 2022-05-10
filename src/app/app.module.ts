import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './view/teste/teste.component';
import { TopMenuComponent } from './view/top-menu/top-menu.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import { CronologiaComponent } from './view/cronologia/cronologia.component';
import { PersonagensComponent } from './view/personagens/personagens.component';
import { ArtistasComponent } from './view/artistas/artistas.component';
import { SobreComponent } from './view/sobre/sobre.component'; 
import { ArtistService } from './shared/service/artist.service';
import { BookChronoService } from './shared/service/book-chrono.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import {CdkTableModule} from '@angular/cdk/table'; 

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
    MatIconModule,
    CdkTableModule,
    MatTableModule,

    HttpClientModule
  ],
  providers: [
    ArtistService,
    BookChronoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
