import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosComponent } from './productos.component';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  // API url
  baseApiUrl = "http://localhost:8080/api/productos";

  //inicializando objeto http
  constructor(private http: HttpClient, private toastrServ: ToastrService) { }

  //variable auxiliar que almacena resultados de cada envio
  resultados = Array();
  // Retorna un objeto observable
  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      //leyendo el contenido
      var reader = new FileReader();
      reader.onloadend = (e) => {

        let lines = reader.result as string;
        let separados = lines.split("\n");

        for (let lineaactual of separados) {
          /* lineaactual.replace(";", ","); */
          let columnas = lineaactual.split(";", 7);
          if (columnas[3] === "nombreproducto") {
            continue;
          }
          this.http.post(
            this.baseApiUrl,
            {
              precioventa: columnas[5],
              preciocompra: columnas[4],
              nombreproducto: columnas[3],
              nitproveedor: columnas[2],
              ivacompra: columnas[1],
              codigoproducto: columnas[0]
            },
            { observe: 'response' }).subscribe(
              (response: any) => {
                let resaux = [];
                resaux[0] = response.status;
                this.resultados.push(resaux);
                let tmp:string = columnas[3];
                this.toastrServ.success("Producto " + columnas[3] + " agregado");
              }
            );            
        }
        console.log(this.resultados);
        resolve(this.resultados);
      };
      reader.readAsText(file);
    });
  }
}