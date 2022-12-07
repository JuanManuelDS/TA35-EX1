import { Component } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent {
  cliente: Cliente = {
    nombre: '',
    cif: '',
    direccion: '',
    grupo: '',
  };

  listado: Cliente[] = [];

  guardar() {
    this.listado.push({ ...this.cliente });

    this.cliente.nombre = '';
    this.cliente.cif = '';
    this.cliente.direccion = '';
    this.cliente.grupo = '';
  }
}
