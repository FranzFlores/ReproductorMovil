import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:3000';
  playlists: Playlist[];
<<<<<<< develop
<<<<<<< develop
  songs: Song[];
=======
>>>>>>> Servicio Plaulist
=======
  songs: Song[];
>>>>>>> Vista de Canciones de Playlist

  constructor(private httpClient: HttpClient) { }

  getPlaylists(){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/playlistAdmin`);
  }

  getPlaylist(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/`+ external);
  }

<<<<<<< develop
<<<<<<< develop
=======
>>>>>>> Vista de Canciones de Playlist
  getPlaylistSongs(external){
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/playlist/songsList/`+ external);
  }


<<<<<<< develop
=======
>>>>>>> Servicio Plaulist
=======
>>>>>>> Vista de Canciones de Playlist
}
