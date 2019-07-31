import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

import { ArtistService } from 'src/app/services/artist.service';
import { SongService} from 'src/app/services/song.service';
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
  private song:Song;
  private audio:any;

  constructor(
    private activetedRoute: ActivatedRoute,
    private artistService: ArtistService,
    private songService: SongService,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.getAlbumSongs();
    $('.pause').hide();
  }

  

  getAlbumSongs(){
    this.external_id = this.activetedRoute.snapshot.paramMap.get('external_id');
    this.albumService.getAlbum(this.external_id)
      .subscribe(res=>{
        this.album = res as Album;
        this.albumService.songs = res.songs as Song[]; 
      });
  }

  play(file){
    this.songService.getSong(file)
      .subscribe(res=>{
         this.song = res as Song;
         this.audio=new Audio('http://localhost:3000/song/get-song-file/'+this.song.file);
         this.audio.play();
        $('.play').hide();
        $('.pause').show();
        $('.title').text((this.song.title).toString()+" - "+ (this.song.album.artist.name).toString());
      });
  }

 
  pause(){
    if($('.pause').attr('data-active')=="false"){
      $('.play').show();
      $('.pause').hide();
      this.audio.pause();
      $('.pause').attr('data-active',"true");
    } else{
      $('.play').hide();
      $('.pause').show();
      this.audio.play();
      $('.pause').attr('data-active',"false");
    }
  }

}
