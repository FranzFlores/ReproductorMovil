import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArtistAlbumsPage } from './artist-albums.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistAlbumsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArtistAlbumsPage]
})
export class ArtistAlbumsPageModule {}
