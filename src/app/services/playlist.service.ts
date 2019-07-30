import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
<<<<<<< develop
<<<<<<< develop
 
import { Playlist } from '../models/playlist';
import { Song } from '../models/song';
<<<<<<< develop
=======

=======
 
>>>>>>> Configuraciones de Pagina Playlist
import { Playlist } from '../models/playlist';
>>>>>>> Servicio Plaulist
=======
>>>>>>> Vista de Canciones de Playlist
=======
 
import { Playlist } from '../models/playlist';
import { Song } from '../models/song';
>>>>>>> playlist

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  playlists: Playlist[];
<<<<<<< HEAD
<<<<<<< develop
<<<<<<< develop
  songs: Song[];
=======
>>>>>>> Servicio Plaulist
=======
  songs: Song[];
>>>>>>> Vista de Canciones de Playlist
=======
  songs: Song[];
>>>>>>> playlist

  constructor(private httpClient: HttpClient) { }

  getPlaylists(){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/playlistAdmin`);
  }

  getPlaylist(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/`+ external);
  }

<<<<<<< HEAD
<<<<<<< develop
<<<<<<< develop
=======
>>>>>>> Vista de Canciones de Playlist
=======
>>>>>>> playlist
  getPlaylistSongs(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/songsList/`+ external);
  }


<<<<<<< HEAD
<<<<<<< develop
=======
>>>>>>> Servicio Plaulist
=======
>>>>>>> Vista de Canciones de Playlist
=======
>>>>>>> playlist
}
