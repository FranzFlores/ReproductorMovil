import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  songs: Song[];

  constructor(private httpClient: HttpClient) { }

  getSongs() {
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/song/songs`);
  }
}
