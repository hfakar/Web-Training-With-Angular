import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assginment2Component } from './assginment2.component';

describe('Assginment2Component', () => {
  let component: Assginment2Component;
  let fixture: ComponentFixture<Assginment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assginment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assginment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
