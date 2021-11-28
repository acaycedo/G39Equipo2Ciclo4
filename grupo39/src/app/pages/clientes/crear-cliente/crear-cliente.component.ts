import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PruebaService } from 'src/app/services/prueba.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private api: PruebaService, private toastrServ: ToastrService) { }

  ngOnInit(): void {
  }

  urlAPI: string = "http://localhost:8080/api/clientes";

  codigoRespuesta!: number;
  res2: any;

  id!: string;
  cedulacliente!: string;
  correo !: string;
  direccion!: string;
  nombrecompleto!: string;
  telefono!: string;

  correcto: number = -1;
  contenido!: any;



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
    if (!this.cedulacliente || !this.correo || !this.direccion || !this.nombrecompleto || !this.telefono) {
      this.toastrServ.error('Por favor llenar cada uno de los campos para realizar el registro');
    } else {
      this.objetohttp.post<any>("http://localhost:8080/api/clientes",
        {
          id: null,
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
        if (this.codigoRespuesta >= 201 && this.codigoRespuesta < 400) {
          this.correcto = 1
          this.toastrServ.success('Cliente registrado con exito');
        } else {
          this.toastrServ.error('Error en la creación de cliente');
          this.correcto = 2
        }
      });
      
      if(this.codigoRespuesta === undefined){
        this.toastrServ.warning('La cédula que intenta registrar ya existe');
      }
      
    }
  }

  /* Actualizar */
  putData() {

    if (!this.id || !this.cedulacliente || !this.correo || !this.direccion || !this.nombrecompleto || !this.telefono) {
      this.toastrServ.error('Por favor llenar cada uno de los campos para realizar la actualización');
    } else {
      this.objetohttp.put(this.urlAPI + "/" + this.id,
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

      if (this.codigoRespuesta >= 200 && this.codigoRespuesta < 400) {
        this.toastrServ.success('Datos de cliente a actualizados con exito');
      } else {
        this.toastrServ.warning('El cliente a actualizar no existe, valide el ID');
      }
    }
  }


  buscarCliente() {
    if (!this.id) {
      this.toastrServ.error('Por favor ingrese un ID para consultar');
    } else {
      this.res2 = this.objetohttp.get(this.urlAPI + "?id=" + this.id);
      this.res2.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].id == this.id) {
            console.log(this.contenido[index]);
            this.cedulacliente = this.contenido[index].cedulacliente
            this.correo = this.contenido[index].correo
            this.direccion = this.contenido[index].direccion
            this.nombrecompleto = this.contenido[index].nombrecompleto
            this.telefono = this.contenido[index].telefono
            this.correcto = 3;
            bandera = true;


          }
        }
        if (bandera) {
          this.correcto = 3;
          this.toastrServ.success('Cliente consultado con exito');
        } else {
          this.correcto = 4;
          this.toastrServ.error('El cliente consultado no existe');
        }


      });
    }
  }

  deleteCliente() {
    if (!this.id) {
      this.toastrServ.error('Por favor ingrese un ID para eliminar');
    } else {
      this.res2 = this.objetohttp.get(this.urlAPI + "?id=" + this.id);
      this.res2.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].id == this.id) {
            console.log(this.contenido[index]);
            this.cedulacliente = this.contenido[index].cedulacliente
            this.correo = this.contenido[index].correo
            this.direccion = this.contenido[index].direccion
            this.nombrecompleto = this.contenido[index].nombrecompleto
            this.telefono = this.contenido[index].telefono

            this.correcto = 3;
            bandera = true;


          }
        }
        if (bandera) {
          this.objetohttp.delete(this.urlAPI + '/' + this.id).subscribe(() => { })
          this.toastrServ.success('Cliente eliminado con exito');
          this.id = "";
        } else {
          this.correcto = 4;
          this.toastrServ.warning('El Cliente a eliminar no existe');
        }


      });

    }
  }

  limpiar() {
    this.id = "";
    this.cedulacliente = "";
    this.nombrecompleto = "";
    this.direccion = "";
    this.telefono = "";
    this.correo = "";
  }

  refresh(): void { window.location.reload(); }



}
