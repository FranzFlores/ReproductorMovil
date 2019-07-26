import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  albums: Album[];
  constructor(private httpClient: HttpClient) { }

  getAlbums(){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/album/albums`);
  }

  getAlbum(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/album/`+ external);
  }
}
