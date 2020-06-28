import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardshomeComponent } from './cardshome.component';

describe('CardshomeComponent', () => {
  let component: CardshomeComponent;
  let fixture: ComponentFixture<CardshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
