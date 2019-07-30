import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/models/playlist';
import * as $ from 'jquery';

import { Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  playlist: Playlist;


  constructor(private playlistService: PlaylistService,private router: Router) { }


  ngOnInit() {
    this.getPlaylists();
  }

  getPlaylists() {
    this.playlistService.getPlaylists().subscribe(res => {
      this.playlistService.playlists = res as Playlist[];
    })
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/playlist/details/"+external);
  }

}
