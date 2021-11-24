import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private objetohttp: HttpClient) { }

  ngOnInit(): void {
  }

  codigoRespuesta!: number;
  res2: any;
  cedulacliente!: string;
  nombrecompleto!: string;
  direccion!: string;
  correo !: string;
  id!: string;
  telefono!: string;



  postData(){
    this.objetohttp.post<any>("http://localhost:8080/api/clientes",
      {
        cedulacliente: this.cedulacliente,
        correo: this.correo,
        direccion: this.direccion,
        nombrecompleto: this.nombrecompleto,
        telefono: this.telefono
      },
      {
        observe: 'response'
      }
    
    ).subscribe(response=>{
      this.codigoRespuesta=response.status;
      this.res2=response;
    });
  }

}
