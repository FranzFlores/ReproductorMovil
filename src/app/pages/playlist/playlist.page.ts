import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/models/playlist';
import * as $ from 'jquery';
<<<<<<< develop
import { Router } from '@angular/router';
=======
>>>>>>> Configuraciones de Pagina Playlist

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  playlist: Playlist;

<<<<<<< develop
  constructor(private playlistService: PlaylistService,private router: Router) { }
=======
  constructor(private playlistService: PlaylistService) { }
>>>>>>> Configuraciones de Pagina Playlist

  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe(res => {
      this.playlistService.playlists = res as Playlist[];
    })
<<<<<<< develop
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/playlist/details/"+external);
=======
>>>>>>> Configuraciones de Pagina Playlist
  }

}
