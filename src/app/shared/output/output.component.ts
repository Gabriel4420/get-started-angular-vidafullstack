import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  //

  @Output() public sendData = new EventEmitter()

  public list: Array<{ name: string; age: number }> = [
    { name: 'Gabriel', age: 24 },
    { name: 'Renato', age: 48 },
  ]

  public getData(event: number) {
    //envia os dados para um outro componente y
    this.sendData.emit(this.list[event])
  }

  constructor() {}

  ngOnInit(): void {}
}
