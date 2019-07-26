import { TestBed } from '@angular/core/testing';

import { ArtistAlbumSongService } from './artist-album-song.service';

describe('ArtistAlbumSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistAlbumSongService = TestBed.get(ArtistAlbumSongService);
    expect(service).toBeTruthy();
  });
});
