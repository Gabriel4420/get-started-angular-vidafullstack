import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true

  public conditionClick: boolean = true

  public list: Array<{
    user: string
    listProduct: Array<string>
    idade?: number
  }> = [
    {
      user: 'Gabriel',
      listProduct: ['Maçã', 'Pera', 'Banana'],
      idade: 30,
    },
    {
      user: 'Renato',
      listProduct: ['Maçã', 'Pera', 'Banana'],
      idade: 30,
    },
    {
      user: 'Viviane',
      listProduct: ['Maçã', 'Pera', 'Banana'],
      idade: 30,
    },
  ]

  public nome: string = ''

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 3000)
  }

  public onClick() {
    this.conditionClick = !this.conditionClick
  }

  public deleteOnClick(event: number) {
    this.list.splice(event, 1)
  }
}
