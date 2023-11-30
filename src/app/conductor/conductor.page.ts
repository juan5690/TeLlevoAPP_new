import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  formularioConductor: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCTRL: NavController
  ) { 
    this.formularioConductor = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'vehiculo': new FormControl("", Validators.required),
      'capacidad': new FormControl("", Validators.required),
      'precio': new FormControl("", [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      'destino': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async registrarConductor() {
    var f = this.formularioConductor.value;

    if (this.formularioConductor.invalid) {
      const alert = await this.alertController.create({
        header: 'Error al registrar',
        message: 'Debes completar todos los campos correctamente!',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }

    var conductor = {
      nombreConductor: f.nombre,
    }

    var modAuto = {
      auto: f.vehiculo,
    }

    var destino = {
      destino: f.destino,
    }

    var precio = {
      precio: f.precio,
    }

    localStorage.setItem('nombreConductor', JSON.stringify(conductor));
    localStorage.setItem('modAuto', JSON.stringify(modAuto));
    localStorage.setItem('destino', JSON.stringify(destino));
    localStorage.setItem('precio', JSON.stringify(precio));

    this.navCTRL.navigateRoot(['/menu', { nombre: f.nombre }]);
  }
}

