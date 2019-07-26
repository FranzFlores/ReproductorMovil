import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout().then(res=>{
      console.log(res);
      this.router.navigateByUrl("/login");
    });
    
  }

}
