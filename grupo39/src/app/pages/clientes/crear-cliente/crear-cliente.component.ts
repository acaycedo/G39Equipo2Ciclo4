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

  constructor(private objetohttp: HttpClient, private api:PruebaService) { }

  ngOnInit(): void {
  }
  

  currentTutorial = {
    cedulacliente: '',
    nombrecompleto: '',
    direccion: '',
    correo : '',
    id: '',
    telefono: ''
  };
  message = '';

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
  correcto:number=-1;



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
      if(this.codigoRespuesta=201){
        this.correcto=1
      }else{
        this.correcto=2
      }
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


  deleteCliente(): void{
    this.res2 = this.objetohttp.delete(this.urlAPI+"?id="+this.id).pipe(catchError(this.handleError));
    //suscribe el archivo json y lo convierte   
    this.res2.subscribe((datos: any[]) => {
      this.contenido = datos;     
      console.log(this.contenido);
  });
    window.location.reload();
  }




  refresh(): void { window.location.reload(); }

}
