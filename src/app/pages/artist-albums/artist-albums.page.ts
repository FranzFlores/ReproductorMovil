import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/models/artist';
import { Album } from 'src/app/models/album';



@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.page.html',
  styleUrls: ['./artist-albums.page.scss'],
})
export class ArtistAlbumsPage implements OnInit {

  private  external_id: string;
  private artist:Artist;

  constructor(
    private activetedRoute: ActivatedRoute,
    private router:Router,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.getArtistAlbums();
  }

  getArtistAlbums(){
    this.external_id = this.activetedRoute.snapshot.paramMap.get('external');
    this.artistService.getArtist(this.external_id)
      .subscribe(res =>{
        this.artist = res as Artist;
        this.artistService.albums = this.artist.albums as Album[];
      });
  }

  openDetails(external){
    this.router.navigateByUrl("/menu/artist/detailsAlbum/"+external);
  }

}
