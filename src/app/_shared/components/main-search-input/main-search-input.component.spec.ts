import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchInputComponent } from './main-search-input.component';

describe('MainSearchInputComponent', () => {
  let component: MainSearchInputComponent;
  let fixture: ComponentFixture<MainSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
