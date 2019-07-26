import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistListPage } from './artist-list.page';

describe('ArtistListPage', () => {
  let component: ArtistListPage;
  let fixture: ComponentFixture<ArtistListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
