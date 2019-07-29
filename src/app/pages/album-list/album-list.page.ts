import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from 'src/app/models/album';
import {SongService} from 'src/app/services/song.service';
import {Song} from 'src/app/models/song';

import * as $ from 'jquery';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
})
export class AlbumListPage implements OnInit {

  album:Album;
  public external_id: string;

  constructor(
    private activetedRoute: ActivatedRoute,
    private albumService:AlbumService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.albumService.getAlbums()
    .subscribe(res=>{      
      this.albumService.albums = res as Album[];
    })
  }



  openDetails(external){
    this.router.navigateByUrl("/menu/album/details/"+external);
  }

}
