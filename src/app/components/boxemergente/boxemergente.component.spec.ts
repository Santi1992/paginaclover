import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxemergenteComponent } from './boxemergente.component';

describe('BoxemergenteComponent', () => {
  let component: BoxemergenteComponent;
  let fixture: ComponentFixture<BoxemergenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxemergenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxemergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
