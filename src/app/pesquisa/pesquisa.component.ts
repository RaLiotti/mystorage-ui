import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {

  ultimoIdMasc = 0;

  ultimoIdFem = 0;

  genero = '';

  link = '';

  nome = 'Testando';

  nome2 = '';

  adicionado = false;

  acao = 'Adicionar';

  funcionarios = [];


  verificar(){
    console.log(this.funcionarios);
  }



  adicionar(){


    if (this.genero === 'f'){
    this.funcionarios.push({
      link: 'https://randomuser.me/api/portraits/women/' + this.ultimoIdFem + '.jpg',
      id: this.ultimoIdFem,
      nome: this.nome2.toUpperCase(),
      genero: 'f'
    });
    console.log('Id feminino adicionado: ' + this.ultimoIdFem);
    ++this.ultimoIdFem;
  }else {
    this.funcionarios.push({
      link: 'https://randomuser.me/api/portraits/men/' + this.ultimoIdMasc + '.jpg',
      id: this.ultimoIdMasc,
      nome: this.nome2.toUpperCase(),
      genero: 'm',
    });
    console.log('Id masculino adicionado: ' + this.ultimoIdMasc);
    ++this.ultimoIdMasc;
  }

    this.nome2 = '';
  }




  teste(){
    if(this.adicionado == false){
      this.adicionado = true;
      this.acao = 'Retirar';
    }else{
      this.adicionado = false;
      this.acao = 'Adicionar';
    }

  }



  /*
  excluirItem(produto: any){
    this.produto
  }
  */

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
