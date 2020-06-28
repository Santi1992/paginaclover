import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcloverComponent } from './imgclover.component';

describe('ImgcloverComponent', () => {
  let component: ImgcloverComponent;
  let fixture: ComponentFixture<ImgcloverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgcloverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
