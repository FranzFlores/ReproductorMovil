import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-songs',
  templateUrl: './album-songs.page.html',
  styleUrls: ['./album-songs.page.scss'],
})
export class AlbumSongsPage implements OnInit {

  private  external_id: string;
  private audio;
  private song: Song;
  private album:Album;

  constructor(
    private activetedRoute: ActivatedRoute,
    private albumService:AlbumService,
    private songService:SongService
  ) { }

  ngOnInit() {
    this.getAlbumSongs();
    $(".pause").hide();
  }

  getAlbumSongs(){
    this.external_id = this.activetedRoute.snapshot.paramMap.get('external');
    this.albumService.getAlbumSongs(this.external_id)
    .subscribe(res =>{
      this.album = res as unknown as Album;
      this.albumService.songs = this.album.songs as Song[];    
    });
  }
  
  play(file) {
    this.songService.getSong(file)
      .subscribe(res => {
        this.song = res as unknown as Song;
        this.audio = new Audio('http://localhost:3000/song/get-song-file/' + this.song.file);
        this.audio.play();
        $('.play').hide();
        $('.pause').show();
        $('.title').text( (this.song.title).toString()+" - "+ (this.song.album.artist.name).toString());
      });
  }

  pause() {
    if ($('.pause').attr('data-active') == "false") {
      $('.play').show();
      $('.pause').hide();
      this.audio.pause();
      $('.pause').attr('data-active', "true");
    } else {
      $('.play').hide();
      $('.pause').show();
      this.audio.play();
      $('.pause').attr('data-active', "false");
    }
  }
}
