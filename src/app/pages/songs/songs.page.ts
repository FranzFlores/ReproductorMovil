import { Component, OnInit} from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';
import * as $ from 'jquery';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  song:Song;
  audio;


  constructor(private songService:SongService) { }

  ngOnInit() {
    this.getSongs();
    $('.pause').hide();
  }

  getSongs(){
    this.songService.getSongs()
      .subscribe(res=>{
        this.songService.songs = res as Song[];
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
       // $('.title').text( (this.song.title).toString()+" - "+ (this.song.album.artist.name).toString());
      });
  }

 
  pause(){
    if($('.pause').attr('data-active')=="false"){
      $('.play').show();
      $('.pause').hide();
     
      $('.pause').attr('data-active',"true");
    } else{
      $('.play').hide();
      $('.pause').show();
      
      $('.pause').attr('data-active',"false");
    }
  }

}
