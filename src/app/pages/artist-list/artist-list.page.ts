import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist} from 'src/app/models/artist';
import * as $ from 'jquery';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.page.html',
  styleUrls: ['./artist-list.page.scss'],
})
export class ArtistListPage implements OnInit {

  artist:Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists(){
    this.artistService.getArtists().subscribe(res=>{
      this.artistService.artists = res as Artist[];
    }); 
  }
}
