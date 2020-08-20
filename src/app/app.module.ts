import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';



import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { ProdutoService } from './produto.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PesquisaComponent,
    TabelaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    CardModule,
    HttpClientModule
  ],
  providers: [ ProdutoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
