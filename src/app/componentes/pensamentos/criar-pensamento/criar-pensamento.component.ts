import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  formulario!: FormGroup;

  constructor(private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
       });
    }

  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
