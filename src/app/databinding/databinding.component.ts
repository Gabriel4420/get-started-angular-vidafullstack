import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent implements OnInit {
  public position: { x: number; y: number } = { x: 0, y: 0 }

  constructor() {}

  public name: string = 'Denner'

  public nome: string = ''

  public age: number = 29

  public checked: boolean = true

  public imgSrc: string = 'https://avatars.githubusercontent.com/u/37821374?v=4'

  public altImg: string = 'Meu avatar do github'

  public alertInfo(event: MouseEvent) {
    console.log(event)
  }

  public mouseMoveTest(value: MouseEvent) {
    this.position.x = value.offsetX
    this.position.y = value.offsetY
  }

  ngOnInit(): void {}
}
