import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';


const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:'artist',
        loadChildren:'../artist-list/artist-list.module#ArtistListPageModule'
      },
      {
        path:'album',
        loadChildren:'../album-list/album-list.module#AlbumListPageModule'
      },
      {
        path:'song',
        loadChildren:'../songs/songs.module#SongsPageModule'
      },
      {
        path:'playlist',
        loadChildren:'../playlist/playlist.module#PlaylistPageModule'
      },
      {
        path:'playlist/details/:external',
        loadChildren:'../playlist-songs/playlist-songs.module#PlaylistSongsPageModule'
      },
      {
        path:'logOut',
        loadChildren:'../songs/songs.module#SongsPageModule'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch:'full' 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
