import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArtistAlbumSongsPage } from './artist-album-songs.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistAlbumSongsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArtistAlbumSongsPage]
})
export class ArtistAlbumSongsPageModule {}
