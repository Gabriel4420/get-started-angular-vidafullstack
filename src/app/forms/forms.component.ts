import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listComidas: Array<{ lanche: string; preco: string }> = [
    { lanche: 'X-Salada', preco: 'R$13.90' },
    { lanche: 'X-Bacon', preco: 'R$15.50' },
    { lanche: 'X-Tudo', preco: 'R$17.70' },
  ]

  constructor() {}

  ngOnInit(): void {}
}
