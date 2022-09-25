import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtributesComponent } from './diretivas-atributes.component';

describe('DiretivasAtributesComponent', () => {
  let component: DiretivasAtributesComponent;
  let fixture: ComponentFixture<DiretivasAtributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasAtributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasAtributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
