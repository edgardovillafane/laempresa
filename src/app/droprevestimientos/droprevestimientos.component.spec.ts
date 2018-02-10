import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroprevestimientosComponent } from './droprevestimientos.component';

describe('DroprevestimientosComponent', () => {
  let component: DroprevestimientosComponent;
  let fixture: ComponentFixture<DroprevestimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroprevestimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroprevestimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
