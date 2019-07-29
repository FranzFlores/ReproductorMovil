import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumsPage } from './artist-albums.page';

describe('ArtistAlbumsPage', () => {
  let component: ArtistAlbumsPage;
  let fixture: ComponentFixture<ArtistAlbumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAlbumsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
