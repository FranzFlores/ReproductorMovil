import { TestBed } from '@angular/core/testing';

import { AlbumSongService } from './album-song.service';

describe('AlbumSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumSongService = TestBed.get(AlbumSongService);
    expect(service).toBeTruthy();
  });
});
