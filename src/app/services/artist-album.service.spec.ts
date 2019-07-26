import { TestBed } from '@angular/core/testing';

import { ArtistAlbumService } from './artist-album.service';

describe('ArtistAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistAlbumService = TestBed.get(ArtistAlbumService);
    expect(service).toBeTruthy();
  });
});
