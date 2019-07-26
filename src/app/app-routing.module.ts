import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'album-list', loadChildren: './pages/album-list/album-list.module#AlbumListPageModule' },
  { path: 'playlist', loadChildren: './pages/playlist/playlist.module#PlaylistPageModule' },
  //{ path: 'menu', loadChildren: './menu/menu/menu.module#MenuPageModule' },
 // { path: 'songs', loadChildren: './pages/songs/songs.module#SongsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
