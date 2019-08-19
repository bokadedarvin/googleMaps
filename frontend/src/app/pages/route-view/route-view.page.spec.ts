import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteViewPage } from './route-view.page';

describe('RouteViewPage', () => {
  let component: RouteViewPage;
  let fixture: ComponentFixture<RouteViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
