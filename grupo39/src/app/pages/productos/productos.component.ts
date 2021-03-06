import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FileUploadService } from './file-upload.service';
import { ToastrService } from 'ngx-toastr';



// import { CSVManager, Options, DataSet, DataModel, Value } from './CSVManager';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  //Función constructora
  constructor(private objetohttp: HttpClient, private fileUploadService: FileUploadService, private toastrServ: ToastrService) { }

  ///////////////// GET /////////////////////////////
  //opciones y objeto revisor de la tabla
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  //variable receptora de documentos
  res: any;
  //variable contenedora de contenidos
  contenido: any;
  csv: any;
  //url api get
  /* urlapiGET: string = "http://universities.hipolabs.com/search?name=middle"; */
  urlapiGET: string = "http://localhost:8080/api/productos";
  urlapiDELETE: string = "http://localhost:8080/api/productos";

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




  ///////////////// METODOS ANGULAR /////////////////////////////

  delete_prod(): void {
    this.res = this.objetohttp.delete(this.urlapiDELETE).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;

      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });

    window.location.reload();


  }

  //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA
  ngOnInit(): void {
    //utilizando el servicio en la url
    this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;

      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });



    //Opciones especiales de la tabla, localización y caracteristicas
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'id',
      }, {
        title: 'codigoproducto',
      }, {
        title: 'ivacompra',
      }, {
        title: 'nitproveedor',
      }, {
        title: 'nombreproducto',
      }, {
        title: 'preciocompra',
      }, {
        title: 'precioventa',
      }],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }

  ///////////////// POST /////////////////////////////
  correcto: number = -1;

  codigoRespuesta: number = 0;
  res2: any;

  //lista que almacenara los resultados de la insercion de cada linea
  resultados: any;
  
  

  // Variable to store shortLink from api response
  file!: File; //variable para almacenar los datos

  //variable de confirmación de recepcion de archivo
  recibido: boolean = false;



  // En caso de seleccionar archivo, escojer el primer archivo
  onChange(event: any) {
    this.file = event.target.files[0];
    this.recibido = true
    if (this.recibido = true) {
      this.correcto = 1;
      this.toastrServ.info('Base CSV cargada con éxito');
    }

  }

  alerta = 0;

  // Cuandop haga click, iniciar proceso de envio
  async onUpload() {
    console.log(this.file);
    this.resultados = await this.fileUploadService.upload(this.file);
    console.log(this.resultados);
    console.log(this.file.name);
    console.log(this.file.size);
    console.log(this.file.type);
    this.alerta = 1;
    /* window.location.reload(); */
  }
}
