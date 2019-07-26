import { TestBed } from '@angular/core/testing';

import { AlbumListService } from './album-list.service';

describe('AlbumListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumListService = TestBed.get(AlbumListService);
    expect(service).toBeTruthy();
  });
});
