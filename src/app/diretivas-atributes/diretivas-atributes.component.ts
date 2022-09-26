import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-diretivas-atributes',
  templateUrl: './diretivas-atributes.component.html',
  styleUrls: ['./diretivas-atributes.component.scss'],
})
export class DiretivasAtributesComponent implements OnInit {
  public value: boolean = true

  public fontSize: string = '20px'

  public list: Array<{ nome: string }> = [{ nome: 'Gabriel' }]

  public nome: string = ''

  public save(): void {
    this.list.push({ nome: this.nome })
    this.nome = ''
  }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.value = !this.value
      if (this.fontSize !== '20px') {
        this.fontSize = '60px'
      } else {
        this.fontSize = '30px'
      }
    }, 2000)
  }
}
