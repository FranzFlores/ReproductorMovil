import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/models/playlist';
import * as $ from 'jquery';
<<<<<<< HEAD
<<<<<<< develop
<<<<<<< develop
import { Router } from '@angular/router';
=======
>>>>>>> Configuraciones de Pagina Playlist
=======
import { Router } from '@angular/router';
>>>>>>> Vista de Canciones de Playlist
=======
import { Router } from '@angular/router';
>>>>>>> playlist

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  playlist: Playlist;

<<<<<<< HEAD
<<<<<<< develop
<<<<<<< develop
  constructor(private playlistService: PlaylistService,private router: Router) { }
=======
  constructor(private playlistService: PlaylistService) { }
>>>>>>> Configuraciones de Pagina Playlist
=======
  constructor(private playlistService: PlaylistService,private router: Router) { }
>>>>>>> Vista de Canciones de Playlist
=======
  constructor(private playlistService: PlaylistService,private router: Router) { }
>>>>>>> playlist

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe(res => {
      this.playlistService.playlists = res as Playlist[];
    })
<<<<<<< HEAD
<<<<<<< develop
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/playlist/details/"+external);
=======
>>>>>>> Configuraciones de Pagina Playlist
=======
>>>>>>> playlist
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/playlist/details/"+external);
  }

}
