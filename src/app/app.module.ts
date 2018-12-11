import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { CardtabuleiroComponent } from './cardtabuleiro/cardtabuleiro.component';
import { CardpersonagemComponent } from './cardpersonagem/cardpersonagem.component';
import { PalavraComponent } from './palavra/palavra.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    CardtabuleiroComponent,
    CardpersonagemComponent,
    PalavraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
