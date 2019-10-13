import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTabsPage } from './base-tabs.page';

describe('BaseTabsPage', () => {
  let component: BaseTabsPage;
  let fixture: ComponentFixture<BaseTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
