import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAlbumSongsPage } from './artist-album-songs.page';

describe('ArtistAlbumSongsPage', () => {
  let component: ArtistAlbumSongsPage;
  let fixture: ComponentFixture<ArtistAlbumSongsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistAlbumSongsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAlbumSongsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
