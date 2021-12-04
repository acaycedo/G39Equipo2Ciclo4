import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CrearClienteComponent } from './pages/clientes/crear-cliente/crear-cliente.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
const routes: Routes = [
  {path:'productos',component: ProductosComponent},
  {path:'dasboard',component: DashboardComponent},
  {path:'login',component: LoginComponent},

  {path:'clientes',component:ClientesComponent},
  {path:'crear_cliente',component:CrearClienteComponent},

  {path:'usuarios', component:UsuariosComponent},
  {path:'', component:DashboardComponent},
  {path:'ventas', component:VentasComponent},
  {path:'reportes', component:ReportesComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
