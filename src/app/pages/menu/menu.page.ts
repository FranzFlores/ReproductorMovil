import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service'; 
import { Router } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private song: Song;
  private audio;

  constructor(
    private authService:AuthService,
    private router: Router,
    private songService:SongService) { }

  ngOnInit() {
    $(".pause").hide();
  }

  logOut(){
    this.authService.logout().then(res=>{
      console.log(res);
      this.router.navigateByUrl("/login");
    });
  }



}
