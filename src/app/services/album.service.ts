import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from '../models/album';
import {Song} from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  albums: Album[];
  songs: Song[];
  constructor(private httpClient: HttpClient) { }

  getAlbums(){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/album/albums`);
  }

  getAlbum(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/album/`+ external);
  }

  getAlbumSongs(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/album//getSongs/`+ external);
  }
}
