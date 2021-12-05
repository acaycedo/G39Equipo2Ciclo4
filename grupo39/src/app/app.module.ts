import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearClienteComponent } from './pages/clientes/crear-cliente/crear-cliente.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReportesListaClientesComponent } from './pages/reportes/reportes-lista-clientes/reportes-lista-clientes.component';
import { ReportesVentasClienteComponent } from './pages/reportes/reportes-ventas-cliente/reportes-ventas-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    ClientesComponent,
    UsuariosComponent,
    CrearClienteComponent,
    VentasComponent,
    ReportesComponent,
    ReportesListaClientesComponent,
    ReportesVentasClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
