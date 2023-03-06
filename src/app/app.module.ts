import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SeguimientosComponent } from './pages/seguimientos/seguimientos.component';
import { AdministracionComponent } from './pages/administracion/administracion.component'

@NgModule({
	declarations: [AppComponent, PerfilComponent, PacientesComponent, SeguimientosComponent, AdministracionComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
