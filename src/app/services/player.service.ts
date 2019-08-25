import { Injectable } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private song: Song;
  private audio;

  constructor(private songService:SongService) { }

}
