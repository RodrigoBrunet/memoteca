import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'conteudo',
    autoria: 'Rod',
    modelo: 'modelo2'
  }


  constructor() { }

  ngOnInit(): void {
  }

  larguraCardPensamento() : String {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }else{
      return 'pensamento-p'
    }
  }

}
