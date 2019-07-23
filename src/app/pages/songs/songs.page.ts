import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  constructor(private songService:SongService) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(){
    this.songService.getSongs()
      .subscribe(res=>{
        this.songService.songs = res as Song[];
      });
  }

}
