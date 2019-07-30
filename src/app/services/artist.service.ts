import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from '../models/artist';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  artists: Artist[];
  albums: Album[];

  constructor(private httpClient: HttpClient) { }

  getArtists() {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/artist/artists`);
  }

  getArtist(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/artist/`+ external);
  }
}
