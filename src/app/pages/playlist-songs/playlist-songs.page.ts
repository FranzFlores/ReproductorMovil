import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist.service';
import { SongService } from 'src/app/services/song.service';
import { Playlist } from 'src/app/models/playlist';
import { Song } from 'src/app/models/song';
import * as $ from 'jquery';


@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.page.html',
  styleUrls: ['./playlist-songs.page.scss'],
})
export class PlaylistSongsPage implements OnInit {

  public external_id: string;
  private song: Song;
  private audio;

  constructor(
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService,
    private songService: SongService
  ) { }

  ngOnInit() {
    this.getSongList();
    $('.pause').hide();
  }

  getSongList() {
    this.external_id = this.activatedRoute.snapshot.paramMap.get('external');
    this.playlistService.getPlaylistSongs(this.external_id)
      .subscribe(res => {
        console.log(res);
        this.playlistService.songs = res as Song[];
      });
  }


  play(file) {
    this.songService.getSong(file)
      .subscribe(res => {
        this.song = res as Song;
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
