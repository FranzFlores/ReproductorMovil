import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from 'src/app/services/artist.service';

import { Artist } from 'src/app/models/artist';
import { Album } from 'src/app/models/album';
import { Song } from 'src/app/models/song';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-artist-album-songs',
  templateUrl: './artist-album-songs.page.html',
  styleUrls: ['./artist-album-songs.page.scss'],
})
export class ArtistAlbumSongsPage implements OnInit {

  private external_id: string;
  private artist:Artist;
  private album:Album;

  constructor(
    private activetedRoute: ActivatedRoute,
    private artistService: ArtistService,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.getAlbumSongs();
  }

  

  getAlbumSongs(){
    this.external_id = this.activetedRoute.snapshot.paramMap.get('external_id');
    this.albumService.getAlbum(this.external_id)
      .subscribe(res=>{
        this.album = res as Album;
        this.albumService.songs = res.songs as Song[]; 
      });
  }

}
