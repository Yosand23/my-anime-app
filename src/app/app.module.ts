import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/home/main/main.component';
import { CtaComponent } from './componentes/home/cta/cta.component';
import { SeccionComponent } from './componentes/home/seccion/seccion.component';
import { AppRoutingModule } from './app-routing.module';
import { MainInfoComponent } from './componentes/info/main-info/main-info.component';
import { MainRepComponent } from './componentes/reproductor/main-rep/main-rep.component';
import { MainResenasComponent } from './componentes/reseñas/main-resenas/main-resenas.component';
import { MainApoyenosComponent } from './componentes/apoyenos/main-apoyenos/main-apoyenos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DmcaComponent } from './componentes/legal/dmca/dmca.component';
import { InformacionComponent } from './componentes/legal/informacion/informacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CtaComponent,
    SeccionComponent,
    MainInfoComponent,
    MainRepComponent,
    MainResenasComponent,
    MainApoyenosComponent,
    FooterComponent,
    DmcaComponent,
    InformacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => {
      
      return initializeApp(environment.firebase)
    }),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
