import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Informacoes do componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Informacoes do componente pai',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
