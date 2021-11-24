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
import { EliminarClienteComponent } from './pages/clientes/eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './pages/clientes/actualizar-cliente/actualizar-cliente.component';
import { ConsultarClienteComponent } from './pages/clientes/consultar-cliente/consultar-cliente.component';


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
    EliminarClienteComponent,
    ActualizarClienteComponent,
    ConsultarClienteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
