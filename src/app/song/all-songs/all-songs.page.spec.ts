import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSongsPage } from './all-songs.page';

describe('AllSongsPage', () => {
  let component: AllSongsPage;
  let fixture: ComponentFixture<AllSongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSongsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
