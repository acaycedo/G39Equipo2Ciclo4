import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }


  productos = '';
  clientes = '';
  usuarios = '';
  ventas = '';
  reportes = '';
  url_actual = this.router.url

  ngOnInit(): void {
    this.url_actual = this.router.url
    if (this.url_actual === "/productos") {
      this.productos = 'active';  
    }
    if (this.url_actual === "/clientes"  || this.url_actual == '/crear_cliente') {
      this.clientes = 'active';
    }
    if (this.url_actual === "/usuarios") {
      this.usuarios = 'active';
    }
    if (this.url_actual === "/ventas") {
      this.ventas = 'active';
    }
    if (this.url_actual === "/reportes" || this.url_actual === "/reportes_lista_clientes" || this.url_actual === "/reportes_ventas_cliente") {
      this.reportes = 'active';
    }
    
    
  }








}
