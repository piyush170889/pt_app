import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTempPage } from './weather-temp.page';

describe('WeatherTempPage', () => {
  let component: WeatherTempPage;
  let fixture: ComponentFixture<WeatherTempPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTempPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
