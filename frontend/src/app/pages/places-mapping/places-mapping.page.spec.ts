import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesMappingPage } from './places-mapping.page';

describe('PlacesMappingPage', () => {
  let component: PlacesMappingPage;
  let fixture: ComponentFixture<PlacesMappingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesMappingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesMappingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
