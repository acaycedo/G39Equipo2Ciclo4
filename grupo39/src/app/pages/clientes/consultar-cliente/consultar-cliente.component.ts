import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usersearch!:string;
  cedulacliente!: string;
  nombrecompleto!: string;
  direccion!: string;
  correo !: string;
  id!: string;
  telefono!: string;


}


