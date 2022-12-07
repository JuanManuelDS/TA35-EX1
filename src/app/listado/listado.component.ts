import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  @Input() clientes: Cliente[] | undefined;
  constructor() {}
  ngOnInit(): void {
   
  }
}
