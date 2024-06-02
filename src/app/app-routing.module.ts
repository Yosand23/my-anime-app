import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/home/main/main.component';
import { MainInfoComponent } from './componentes/info/main-info/main-info.component';
import { MainRepComponent } from './componentes/reproductor/main-rep/main-rep.component';
import { MainResenasComponent } from './componentes/reseñas/main-resenas/main-resenas.component';
import { MainApoyenosComponent } from './componentes/apoyenos/main-apoyenos/main-apoyenos.component';
import { DmcaComponent } from './componentes/legal/dmca/dmca.component';
import { InformacionComponent } from './componentes/legal/informacion/informacion.component';
import { DescargarComponent } from './componentes/descargar/descargar.component';

const routes: Routes = [
  { path: '', component:  MainComponent},
  { path: 'informacion', component:  MainInfoComponent},
  { path: 'reproductor', component:  MainRepComponent},
  { path: 'reseñas', component:  MainResenasComponent},
  { path: 'apoyanos', component:  MainApoyenosComponent},
  { path: 'legal/dmca', component:  DmcaComponent},
  { path: 'legal/informacion', component:  InformacionComponent},
  { path: 'descargar', component:  DescargarComponent},
  {path: '**',redirectTo:''}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
