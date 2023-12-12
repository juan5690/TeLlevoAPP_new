import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCTRL: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })

  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var nombreLog = localStorage.getItem('nombre');
    var passLog = localStorage.getItem('password');
  
    if (nombreLog !== null && passLog !== null) {
      var nombreAcceso = JSON.parse(nombreLog);
      var claveAcceso = JSON.parse(passLog);
  
      if (nombreAcceso.nombre == f.nombre && claveAcceso.password == f.password) {
        console.log(f.nombre, f.password);
        localStorage.setItem('ingresado', 'true');
        this.navCTRL.navigateRoot(['/menu', { nombre: f.nombre }]);
      } else {
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
          message: 'Error al ingresar el nombre o la contraseña!',
          buttons: ['Aceptar'],
        });
  
        await alert.present();
      }
    }
  }
}
