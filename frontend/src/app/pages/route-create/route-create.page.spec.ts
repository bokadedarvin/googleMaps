import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCreatePage } from './route-create.page';

describe('RouteCreatePage', () => {
  let component: RouteCreatePage;
  let fixture: ComponentFixture<RouteCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
