import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioRegistro: FormGroup;


  constructor(public fb: FormBuilder, public alertController: AlertController, public navCTRL: NavController) { 

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'validacionPassword': new FormControl("",Validators.required),
    })

  }

  ngOnInit() {
  }

  async registrar(){
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error al registrar',
        message: 'Debes completar todos los campos!',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }

    var usuarioNombre = {
      nombre: f.nombre,
    }

    var usuarioPass ={
      password: f.password,
    }

    localStorage.setItem('nombre', JSON.stringify(usuarioNombre));
    localStorage.setItem('password',JSON.stringify(usuarioPass));
    this.navCTRL.navigateRoot(['/menu', { nombre: f.nombre }]);
  }

}
