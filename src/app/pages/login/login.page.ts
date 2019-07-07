import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  //Desaparecer el modal de Loign
  dismissLogin() {
    this.modalController.dismiss();
  }

  login(form: NgForm) {
    
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Inicio de Sesión Correcto");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/menu');
      }
    );
  }


  ngOnInit() {
  }

}
