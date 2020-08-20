import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  produtos: Array<any>;

  constructor(private produtoService: ProdutoService) { }





  buscarProdutos(){
    this.produtoService.listar().subscribe(dados => this.produtos = dados);


    //this.produtoService.listar();
  }

  ngOnInit(): void {

    //this.buscarProdutos();

  }

}
