import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  public name: string = ''
  @Input() public counter: number = 0
  constructor() {}

  ngOnInit(): void {}
}
