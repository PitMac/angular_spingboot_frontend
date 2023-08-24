import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: ListaComponent },
  { path: 'devolucion/:id', component: DevolucionComponent },
  { path: 'devolucion', component: DevolucionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
