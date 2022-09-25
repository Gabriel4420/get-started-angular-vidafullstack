import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class HeadingComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Hello World Angular Bacaninha'

  constructor() {}
  ngOnDestroy(): void {
    console.log('foi destruido')
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('Foi alterado com sucesso')
  }
}
