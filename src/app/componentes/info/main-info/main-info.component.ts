import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {
  estrellas:number;
  arrayEstrellasCal:number[];
  arrayEstrellas:number[];
  informacion:any[];
  descargas:number;

  constructor(private service:FirebaseService){
    this.estrellas =3;
    this.descargas =0;
    this.arrayEstrellasCal = Array(this.estrellas);
    this.arrayEstrellas = Array(5-this.estrellas);
    this.informacion = [];
    this.refrescarEstrellas();
    this.refrescarDescargas();
    this.refreshInfo();
  }

  refreshInfo(){
    this.informacion = [
      {
        titulo: "Nombre: ",
        contenido:"My anime app"
      },
      {
        titulo: "Tamaño: ",
        contenido:"23.7 MB"
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
        contenido:"1.1.0"
      },
      {
        titulo:"Fecha actualización: ",
        contenido:"23-03-2024"
      },
      {
        titulo:"Descargas:",
        contenido:this.validarDescargas()
      },
      {
        titulo:"Plataforma: ",
        contenido:"Movil - Android TV"
      },
      {
        titulo:"OS: ",
        contenido:"Android"
      }
    ];
  }

  validarDescargas(){
    let men = this.descargas+"";
    if(this.descargas>1000){
      men = (this.descargas/1000).toFixed(1) + " k";
    }
    if(this.descargas>1000000){
      men = (this.descargas/1000000).toFixed(1)+ " M";
    }
    return men;
  }
  refrescarEstrellas(){
    this.service.getCalificacion().then(data=>{
      
      this.estrellas = data;
      this.arrayEstrellasCal = Array(this.estrellas);
      this.arrayEstrellas = Array(5-this.estrellas);
    });
  }

  refrescarDescargas(){
    this.service.getDescargas().then(data=>{
      this.descargas = data;
      this.refreshInfo();
    });
  }
}
