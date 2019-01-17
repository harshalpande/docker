import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPersonComponent } from './fetch-person.component';

describe('FetchPersonComponent', () => {
  let component: FetchPersonComponent;
  let fixture: ComponentFixture<FetchPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

