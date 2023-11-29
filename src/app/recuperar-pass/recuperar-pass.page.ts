import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  FormNuevaPass: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 
    this.FormNuevaPass = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'nuevaPass': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async Modificar() {
    var f = this.FormNuevaPass.value;

    var newPass = {
      password: f.nuevaPass,
    }
    
    localStorage.setItem('password', JSON.stringify(newPass));

    // Llamamos a la función presentAlert para mostrar la alerta con un mensaje personalizado
    this.presentAlert('Contraseña modificada con éxito!');
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}