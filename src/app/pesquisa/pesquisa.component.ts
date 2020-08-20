import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {

  nome = 'Testando';

  nome2 = '';


   this.nome = nomeTeste;

  }

  adicionar(){
    const numero = Math.round(Math.random() * 100);

    this.nome = 'Rafael ' + numero;

    console.log('Estamos testando ' + this.nome);


  }

 // excluirItem(produto: any){
 //   this.produto
 // }


  alterarNome(evento : any){

    console.log(evento.target.value);

    this.nome2 = evento.target.value;
  }




  produtos = [

    {
      id: 1,
      nome: 'Toddy',
      descricao: 'Achocolatado em Pó TODDY Original 800g',
      tipo:'Alimento',
      valor: '10.00'
    },

    {
      id: 2,
      nome: 'Chocolicia',
      descricao: 'Biscoito Recheado Chocolate Chocolícia 143g',
      tipo:'Alimento',
      valor: '3.00'
    },
  ];



}
