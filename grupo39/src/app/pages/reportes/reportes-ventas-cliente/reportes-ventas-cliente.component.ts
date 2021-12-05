import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-reportes-ventas-cliente',
  templateUrl: './reportes-ventas-cliente.component.html',
  styleUrls: ['./reportes-ventas-cliente.component.css']
})
export class ReportesVentasClienteComponent implements OnInit {

  //Función constructora
  constructor(private objetohttp: HttpClient) { }

  ///////////////// GET /////////////////////////////
  //opciones y objeto revisor de la tabla
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  //variable receptora de documentos
  res: any;
  res2: any;
  //variable contenedora de contenidos
  contenido: any;
  contenido2: any;


  //variables
  activate:number = 0;

  //url api get
  /* urlapiGET: string = "http://universities.hipolabs.com/search?name=middle"; */
  urlapiGET: string = "http://localhost:8080/api/ventas";
  urlapiGET_Clientes: string = "http://localhost:8080/api/clientes";

  //FUNCIÓN DE CONTROL DE ERRORES
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

  //eliminando objeto revisor de cambios de la tabla
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  refresh(): void { window.location.reload(); }

  ngOnInit(): void {
    //utilizando el servicio en la url
    this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);      
    });

    //utilizando el servicio en la url
    this.res2 = this.objetohttp.get(this.urlapiGET_Clientes).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res2.subscribe((datos2: any[]) => {
      this.contenido2 = datos2;
      console.log(this.contenido2);
      this.dtTrigger.next(this.dtOptions);      
      setTimeout(() => {
        this.funcion_x()
       }, 100);
    });
    
  }

  funcion_x() {
    /* ------------------------------------------------------------------------ */
    /* TOTALIZACIÓN DE VENTA POR CLIENTE */
    for (let i = 0; i < this.contenido2.length; i++) {
      const element = this.contenido2[i];
      console.log(element.cedulacliente);
      console.log(element.correo);
      console.log(element.direccion);
      console.log(element.id);
      console.log(element.nombrecompleto);
      console.log(element.telefono);
      element.valor_total_ventas = 0.00;


      for (let i = 0; i < this.contenido.length; i++) {
        const element2 = this.contenido[i];
        if (element2.cedulacliente == element.cedulacliente) {
          element.valor_total_ventas += element2.valorventa;
        }
      }
      element.valor_total_ventas = element.valor_total_ventas.toFixed(2);
      console.log(element.valor_total_ventas);
    }
    /* ------------------------------------------------------------------------ */
    /* CRUCE DE CLIENTE Y VENTAS DESAGRUPADAS 1er NIVEL */
    for (let i = 0; i < this.contenido.length; i++) {
      const element = this.contenido[i];
      /*       console.log(element.codigoventa);
            console.log(element.detalleventa);
            for (let j = 0; j < element.detalleventa.length; j++) {
              const elementx = element.detalleventa[j];
              console.log("---");
              console.log(elementx);
            }
            console.log(element.id); */      
      element.nombrecompleto = "Error. No hay cliente relacionado";
      for (let i = 0; i < this.contenido2.length; i++) {
        const element2 = this.contenido2[i];        
        if (element2.cedulacliente == element.cedulacliente) {
          element.nombrecompleto = element2.nombrecompleto;
        }
      }
      console.log(element.nombrecompleto);
    }    

  }

  mostrar_desagrupado(){
    if (this.activate === 0) {
      this.activate = 1;
    }else{
      this.activate = 0;
    }   
    setTimeout(() => {
      this.funcion_x()
     }, 100);
  }
}