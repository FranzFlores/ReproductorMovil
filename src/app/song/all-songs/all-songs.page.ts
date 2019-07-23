import { Component, OnInit } from '@angular/core';

import {SongService} from '../song.service';
import {Song} from '../song';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.page.html',
  styleUrls: ['./all-songs.page.scss'],
})
export class AllSongsPage implements OnInit {

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
