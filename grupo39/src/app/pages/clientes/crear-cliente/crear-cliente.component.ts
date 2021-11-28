import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private api: PruebaService) { }

  ngOnInit(): void {
  }

  urlAPI: string = "http://localhost:8080/api/clientes";
  codigoRespuesta!: number;
  res2: any;
  cedulacliente!: string;
  nombrecompleto!: string;
  direccion!: string;
  correo !: string;
  id!: string;
  telefono!: string;
  contenido!: any;
  correcto: number = -1;



  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  postData() {
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

    ).subscribe(response => {
      this.codigoRespuesta = response.status;
      this.res2 = response;
      if (this.codigoRespuesta = 201) {
        this.correcto = 1
      } else {
        this.correcto = 2
      }
    });
  }


  putData() {
    return this.objetohttp.put(this.urlAPI+ "/"+ this.id,
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

    ).subscribe(response => {
      this.codigoRespuesta = response.status;
    });
    
  }


  buscarCliente() {
    this.res2 = this.objetohttp.get(this.urlAPI + "?id=" + this.id);
    this.res2.subscribe((data: any[]) => {
      this.contenido = data;
      for (let index = 0; index < this.contenido.length; index++) {
        if (this.contenido[index].id == this.id) {
          console.log(this.contenido[index]);
          this.cedulacliente = this.contenido[index].cedulacliente
          this.nombrecompleto = this.contenido[index].nombrecompleto
          this.direccion = this.contenido[index].direccion
          this.telefono = this.contenido[index].telefono
          this.correo = this.contenido[index].correo
          this.correcto = 3;
        }else{
          this.correcto = 4;
        }
      }

    });
  }
  
  deleteCliente(){
    return this.objetohttp.delete(this.urlAPI + '/' + this.id).subscribe(() => {
      alert("Cliente eliminado con exito")
      this.id = "";
    })
  }
  








  refresh(): void { window.location.reload(); }

}
