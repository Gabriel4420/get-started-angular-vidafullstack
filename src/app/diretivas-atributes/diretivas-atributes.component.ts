import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-diretivas-atributes',
  templateUrl: './diretivas-atributes.component.html',
  styleUrls: ['./diretivas-atributes.component.scss'],
})
export class DiretivasAtributesComponent implements OnInit {
  constructor() {}

  public value: boolean = true

  public fontSize: string = '20px'

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
