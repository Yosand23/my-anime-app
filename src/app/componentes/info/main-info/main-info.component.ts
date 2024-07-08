import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {
  estrellas:number = 3;
  arrayEstrellasCal:number[] =  Array(this.estrellas);
  arrayEstrellas:number[] = Array(5-this.estrellas);
  informacion:any[] = [];
  informacionMovil:any[]=[];
  descargas:number = 0;
  descargasMovil:number = 0;
  fecha:any;
  version = 1;

  constructor(private service:FirebaseService){

    this.refrescarEstrellas();
    this.refrescarDescargas();

    this.validarFecha();
  }

  refreshInfo(){
    this.informacion = [
      {
        titulo: "Nombre: ",
        contenido:"My anime app"
      },
      {
        titulo: "Tamaño: ",
        contenido:"24.9 MB"
      },
      {
        titulo: "Instalación: ",
        contenido:"Sencilla"
      },
      {
        titulo: "Tipo Archivo: ",
        contenido:"APK"
      },
      {
        titulo: "Detección: ",
        contenido:"Seguro"
      },
      {
        titulo: "Version: ",
        contenido:'2.'+this.version+'.0'
      },
      {
        titulo:"Fecha actualización: ",
        contenido:this.fecha
      },
      {
        titulo:"Descargas:",
        contenido:this.validarDescargas(this.descargas)
      },
      {
        titulo:"Plataforma: ",
        contenido:"Móvil - Android TV"
      },
      {
        titulo:"OS: ",
        contenido:"Android"
      }
    ];
    this.informacionMovil = [
      {
        titulo: "Nombre: ",
        contenido:"My anime app"
      },
      {
        titulo: "Tamaño: ",
        contenido:"55.6 MB"
      },
      {
        titulo: "Instalación: ",
        contenido:"Sencilla"
      },
      {
        titulo: "Tipo Archivo: ",
        contenido:"APK"
      },
      {
        titulo: "Detección: ",
        contenido:"Seguro"
      },
      {
        titulo: "Version: ",
        contenido:'2.'+this.version+'.0'
      },
      {
        titulo:"Fecha actualización: ",
        contenido:this.fecha
      },
      {
        titulo:"Descargas:",
        contenido:this.validarDescargas(this.descargasMovil)
      },
      {
        titulo:"Plataforma: ",
        contenido:"Móvil"
      },
      {
        titulo:"OS: ",
        contenido:"Android"
      }
    ];
  }

  validarDescargas(descargas:number){
    let men = descargas+"";
    if(descargas>1000){
      men = (descargas/1000).toFixed(1) + " k";
    }
    if(descargas>1000000){
      men = (descargas/1000000).toFixed(1)+ " M";
    }
    return men;
  }

  validarFecha(){
    this.service.getActualizacion().then((data:any)=>{
      this.fecha = data["fecha_act"].toDate().toLocaleDateString();
      this.version = data["fecha"];
      this.refreshInfo();
    });
  }
  refrescarEstrellas(){
    this.service.getCalificacion().then(data=>{
      this.estrellas = data;
      this.arrayEstrellasCal = Array(this.estrellas);
      this.arrayEstrellas = Array(5-this.estrellas);
    });
  }

  async refrescarDescargas(){
    this.descargas = await this.service.getDescargas(0);
    this.descargasMovil = await this.service.getDescargas(1);
    this.refreshInfo();
  }
}
