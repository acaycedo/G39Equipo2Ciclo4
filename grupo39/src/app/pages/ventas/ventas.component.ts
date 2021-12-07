import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private toastrServ: ToastrService) { }

  ngOnInit(): void {
  }

  urlapiclientes: string = "http://localhost:8080/api/clientes";
  codigoRespuesta!: number;
  res2: any;

  correcto: number = -1;
  contenido!: any;

  id!: string;
  cedulacliente!: string;
  nombrecliente!: string;
  consecutivo!: any;

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
  buscarVentas() {
    this.res2 = this.objetohttp.get(this.urlapiventas).pipe(catchError(this.handleError));
    this.res2.subscribe((datos: any[]) => {
      this.contenido = datos;

      console.log(datos.length);
      this.consecutivo = datos.length + 1;
    });
  }

  buscarCliente() {
    if (!this.cedulacliente) {
      this.toastrServ.error('Por favor ingrese la cedula para consultar');
    } else {
      this.res2 = this.objetohttp.get(this.urlapiclientes + "?cedulacliente=" + this.cedulacliente);
      this.res2.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].cedulacliente == this.cedulacliente) {
            console.log(this.contenido[index]);
            this.cedulacliente = this.contenido[index].cedulacliente
            this.nombrecliente = this.contenido[index].nombrecompleto
            this.correcto = 3;
            bandera = true;
          }
        }
        if (bandera) {
          this.toastrServ.success('Cliente consultado con exito');
        } else {
          this.toastrServ.error('El cliente consultado no existe');
        }


      });
    }
  }

  urlapiproductos: string = "http://localhost:8080/api/productos";
  codigoproducto!: string;
  nombreproducto!: string;
  preciocompra!: number;
  precioventa: number = 0;
  ivacompra!: number;


  cantidad: number = 0;
  valortotalproducto: number = 0;
  res3!: any;

  totalventa: number = 0;
  totaliva: number = 0;
  totalconiva: number = 0;


  buscarProducto() {
    if (!this.codigoproducto) {
      this.toastrServ.error('Por favor ingrese el codigo del producto para consultar');
    } else {
      this.res3 = this.objetohttp.get(this.urlapiproductos + "?codigoproducto=" + this.codigoproducto);
      this.res3.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].codigoproducto == this.codigoproducto) {
            console.log(this.contenido[index]);
            this.codigoproducto = this.contenido[index].codigoproducto
            this.nombreproducto = this.contenido[index].nombreproducto
            this.preciocompra = this.contenido[index].preciocompra
            this.precioventa = this.contenido[index].preciocompra
            this.ivacompra = this.contenido[index].ivacompra

            this.correcto = 3;
            bandera = true;
          }
        }
        if (bandera) {
          this.correcto = 3;
          this.toastrServ.success('Producto consultado con exito');
        } else {
          this.correcto = 4;
          this.toastrServ.error('Producto no existe');
        }


      });
    }
  }

  calcularSubtotal() {

    if (!this.cantidad) {
      this.toastrServ.warning('Por favor ingrese una cantidad mayor a 0');
    } else {
      if (this.cantidad > 0) {
        this.valortotalproducto = this.cantidad * this.precioventa

      } else {
        this.toastrServ.error('Cantidad debe ser mayor de 0');
      }

    }
  }


  codigoproducto2!: string;
  nombreproducto2!: string;
  cantidad2: number = 0;
  preciocompra2!: number;
  precioventa2: number = 0;
  ivacompra2!: number;

  valortotalproducto2: number = 0;





  buscarProducto2() {
    if (!this.codigoproducto2) {
      this.toastrServ.error('Por favor ingrese el codigo del producto para consultar');
    } else {
      this.res3 = this.objetohttp.get(this.urlapiproductos + "?codigoproducto=" + this.codigoproducto2);
      this.res3.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].codigoproducto == this.codigoproducto2) {
            console.log(this.contenido[index]);
            this.codigoproducto2 = this.contenido[index].codigoproducto
            this.nombreproducto2 = this.contenido[index].nombreproducto
            this.preciocompra2 = this.contenido[index].preciocompra
            this.precioventa2 = this.contenido[index].preciocompra
            this.ivacompra2 = this.contenido[index].ivacompra
            this.correcto = 3;
            bandera = true;
          }
        }
        if (bandera) {
          this.correcto = 3;
          this.toastrServ.success('Producto consultado con exito');
        } else {
          this.correcto = 4;
          this.toastrServ.error('Producto no existe');
        }


      });
    }
  }

  calcularSubtotal2() {

    if (!this.cantidad2) {
      this.toastrServ.warning('Por favor ingrese una cantidad mayor a 0');
    } else {
      if (this.cantidad2 > 0) {
        this.valortotalproducto2 = this.cantidad2 * this.precioventa2

      } else {
        this.toastrServ.error('Cantidad debe ser mayor de 0');
      }

    }
  }

  codigoproducto3!: string;
  nombreproducto3!: string;
  cantidad3: number = 0;
  preciocompra3!: number;
  precioventa3: number = 0;
  ivacompra3!: number;

  valortotalproducto3: number = 0;
  buscarProducto3() {
    if (!this.codigoproducto3) {
      this.toastrServ.error('Por favor ingrese el codigo del producto para consultar');
    } else {
      this.res3 = this.objetohttp.get(this.urlapiproductos + "?codigoproducto=" + this.codigoproducto3);
      this.res3.subscribe((data: any[]) => {
        this.contenido = data;
        let bandera = false;
        for (let index = 0; index < this.contenido.length; index++) {
          if (this.contenido[index].codigoproducto == this.codigoproducto3) {
            console.log(this.contenido[index]);
            this.codigoproducto3 = this.contenido[index].codigoproducto
            this.nombreproducto3 = this.contenido[index].nombreproducto
            this.preciocompra3 = this.contenido[index].preciocompra
            this.precioventa3 = this.contenido[index].preciocompra
            this.ivacompra3 = this.contenido[index].ivacompra
            this.correcto = 3;
            bandera = true;
          }
        }
        if (bandera) {
          this.correcto = 3;
          this.toastrServ.success('Producto consultado con exito');
        } else {
          this.correcto = 4;
          this.toastrServ.error('Producto no existe');
        }


      });
    }
  }
  calcularSubtotal3() {

    if (!this.cantidad3) {
      this.toastrServ.warning('Por favor ingrese una cantidad mayor a 0');
    } else {
      if (this.cantidad3 > 0) {
        this.valortotalproducto3 = this.cantidad3 * this.precioventa3

      } else {
        this.toastrServ.error('Cantidad debe ser mayor de 0');
      }

    }
  }

  valoriva1: number = 0;
  valoriva2: number = 0;
  valoriva3: number = 0;
  detalleventa = Array();
  map:{[
    key:string]:any;}={}
    
    
  

  urlapiventas: string = "http://localhost:8080/api/ventas";


  confirmar() {
    if (!this.cedulacliente || !this.nombrecliente) {
      this.toastrServ.error('Por favor ingrese el cliente');

    } else {

      this.totalventa = this.valortotalproducto + this.valortotalproducto2 + this.valortotalproducto3;

      if (this.cantidad > 0) {
        this.valoriva1 = (this.valortotalproducto * this.ivacompra) / 100;
        this.totaliva += this.valoriva1;
        if (this.cantidad2 > 0) {
          this.valoriva2 = (this.valortotalproducto2 * this.ivacompra2) / 100;
          this.totaliva += this.valoriva2;
          if (this.cantidad3 > 0) {
            this.valoriva3 = (this.valortotalproducto3 * this.ivacompra3) / 100;
            this.totaliva += this.valoriva3;

          }
        }

      }
      this.totalconiva = this.totaliva + this.totalventa;
    }

  }

  confirmObjects() {
    if (this.cantidad != 0) {
      this.detalleventa.push(
            {
              "cantidadproducto": this.cantidad,
              "codigoproducto": this.codigoproducto,
              "valortotal": this.valortotalproducto,
              "valorventa": this.precioventa,
              "valoriva": this.ivacompra,
            },
        );
        
      if (this.cantidad2 != 0) {
        this.detalleventa.push(
          {
            "cantidadproducto": this.cantidad2,
            "codigoproducto": this.codigoproducto2,
            "valortotal": this.valortotalproducto2,
            "valorventa": this.precioventa2,
            "valoriva": this.ivacompra2,
          },
          );
        if (this.cantidad3 != 0) {
          this.detalleventa.push(
          {
            "cantidadproducto": this.cantidad2,
            "codigoproducto": this.codigoproducto2,
            "valortotal": this.valortotalproducto2,
            "valorventa": this.precioventa2,
            "valoriva": this.ivacompra2,
          },
          );
            }
          
        
      }
    }
  }


  enviar() {

    this.confirmObjects()
    if (!this.cedulacliente || !this.nombrecliente) {
      this.toastrServ.error('Por favor ingrese el cliente');
    } else {
      if (this.totalconiva == 0 || this.totaliva == 0 || this.totalventa == 0) {
        this.toastrServ.warning('Por favor termine de llenar los campos solicitados');
      } else {
        this.objetohttp.post<any>(this.urlapiventas,
          {
            "codigoventa": this.consecutivo,
            "cedulacliente": this.cedulacliente,
            "ivaventa": this.totaliva,
            "totalventa": this.totalventa,
            "valorventa": this.totalconiva,
            "detalleventa":this.detalleventa
            /* "detalleventa": [
              {
                "cantidadproducto": this.cantidad,
                "codigoproducto": this.codigoproducto,
                "valortotal": this.valortotalproducto,
                "valorventa": this.precioventa,
                "valoriva": this.ivacompra,
              },
              {
                "cantidadproducto": this.cantidad2,
                "codigoproducto": this.codigoproducto2,
                "valortotal": this.valortotalproducto2,
                "valorventa": this.precioventa2,
                "valoriva": this.ivacompra2,
              },
              {
                "cantidadproducto": this.cantidad3,
                "codigoproducto": this.codigoproducto3,
                "valortotal": this.valortotalproducto3,
                "valorventa": this.precioventa3,
                "valoriva": this.ivacompra3,
                }
               */
            
          },
          {
            observe: 'response'
          },
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

      }

    }

  }




}
