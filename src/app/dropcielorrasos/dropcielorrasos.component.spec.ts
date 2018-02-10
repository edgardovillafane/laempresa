import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropcielorrasosComponent } from './dropcielorrasos.component';

describe('DropcielorrasosComponent', () => {
  let component: DropcielorrasosComponent;
  let fixture: ComponentFixture<DropcielorrasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropcielorrasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropcielorrasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
