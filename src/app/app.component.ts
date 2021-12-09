import { Component } from '@angular/core';

import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleadoArr: Empleado[] = [
    { id: 1, nombre: 'Marlon', ruc: 123456, razon: 'Peru', telefono: 98626168 },
    { id: 2, nombre: 'Julio', ruc: 456789, razon: 'Chile', telefono: 123456789 }
  ];
  
  empleado: Empleado = new Empleado();

  guardar() {

    if(this.empleado.id === 0) {
      this.empleado.id = this.empleadoArr.length + 1;
      this.empleadoArr.push(this.empleado);
    }

    this.empleado = new Empleado();
  }

  editar(empleado: Empleado) {
    this.empleado = empleado;
  }

  eliminar() {
    this.empleadoArr = this.empleadoArr.filter(x => x != this.empleado);

    this.empleado = new Empleado();
  }

}
