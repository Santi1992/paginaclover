import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenemergenteComponent } from './venemergente.component';

describe('VenemergenteComponent', () => {
  let component: VenemergenteComponent;
  let fixture: ComponentFixture<VenemergenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenemergenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenemergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
