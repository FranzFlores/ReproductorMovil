import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Playlist } from '../models/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  playlists: Playlist[];

  constructor(private httpClient: HttpClient) { }

  getPlaylists(){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/playlistAdmin`);
  }

  getPlaylist(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/`+ external);
  }

}
