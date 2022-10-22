import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-heading *ngIf="destruir"></app-heading>
    <button (click)="destruirComponent()">Destruir Componente</button> -->
    <!-- <app-databinding></app-databinding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!--    <app-diretivas-atributes>
      <h1>Curso de diretivas de atributos no angular</h1>
      <hr/>
      <footer>All rights reserved - 2022</footer>
    </app-diretivas-atributes> -->
    <app-input [counter]="addValue"></app-input>
    <br />
    <button (click)="add()">Add</button>
    <ng-template [ngIf]="getData">
      <h1>Nome:{{getData.name}}</h1> 
      <h1>Idade:{{getData.age}} anos</h1>

    </ng-template>
    <app-output (sendData)="setData($event)"></app-output>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  //  variables

  /* public destruir: boolean = true

  public value: number = 1
 */

  /* public destruirComponent() {
    this.destruir = !this.destruir
  } */

  public getData: { name: string; age: number } | undefined

  public addValue: number = 0

  public add() {
    this.addValue++
  }

  constructor() {}

  public setData(event: { name: string; age: number }) {
    this.getData = event
  }

  /*  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  } */

  ngOnInit(): void {}
}
