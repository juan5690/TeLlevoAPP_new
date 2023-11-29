import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  nombreUsuario: string | null = '';

  constructor(private route: ActivatedRoute) {
    // Obtener el valor de 'nombre' del parámetro
    this.route.params.subscribe(params => {
      this.nombreUsuario = params['nombre'];
    });
  }

  ngOnInit() {
  }

}
