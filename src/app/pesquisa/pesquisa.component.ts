import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {


  produtos = [

    {nome: 'Toddy',
     descricao: 'Achocolatado em Pó TODDY Original 800g',
     tipo:'Alimento',
     valor: '10.00'},

     {nome: 'Chocolicia',
     descricao: 'Biscoito Recheado Chocolate Chocolícia 143g',
     tipo:'Alimento',
     valor: '3.00'},
  ];



}
