import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { Album } from 'src/app/models/album';
import * as $ from 'jquery';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
})
export class AlbumListPage implements OnInit {

  album:Album;

  constructor(private albumService:AlbumService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.albumService.getAlbums()
    .subscribe(res=>{      
      this.albumService.albums = res as Album[];
    })
  }

}
