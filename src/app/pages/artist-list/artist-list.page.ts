import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist} from 'src/app/models/artist';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.page.html',
  styleUrls: ['./artist-list.page.scss'],
})
export class ArtistListPage implements OnInit {

  artist:Artist;

  constructor(
    private artistService: ArtistService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists(){
    this.artistService.getArtists().subscribe(res=>{
      this.artistService.artists = res as Artist[];
    }); 
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/artist/details/"+external);
  }
}
