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
    <app-diretivas-atributes>
      <h1>Curso de diretivas de atributos no angular</h1>
      <hr/>
      <footer>All rights reserved - 2022</footer>
    </app-diretivas-atributes>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  //  variables

  /* public destruir: boolean = true

  public value: number = 1
 */
  constructor() {}

  /* public destruirComponent() {
    this.destruir = !this.destruir
  } */

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
