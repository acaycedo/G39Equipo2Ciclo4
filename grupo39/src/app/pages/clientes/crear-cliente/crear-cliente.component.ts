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

  urlAPI:string="http://localhost:8080/api/clientes";
  codigoRespuesta!: number;
  res2: any;
  cedulacliente!: string;
  nombrecompleto!: string;
  direccion!: string;
  correo !: string;
  id!: string;
  telefono!: string;
  contenido!:any;



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
  buscarCliente(){
    this.res2=this.objetohttp.get(this.urlAPI+"?id="+this.id);
    this.res2.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
      this.cedulacliente=this.contenido[0].cedulacliente
      this.nombrecompleto=this.contenido[0].nombrecompleto
      this.direccion=this.contenido[0].direccion
      this.telefono=this.contenido[0].telefono
      this.correo=this.contenido[0].correo
    });



  }



  refresh(): void { window.location.reload(); }

}
