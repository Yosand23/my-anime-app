import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';


@Component({
  selector: 'app-main-resenas',
  templateUrl: './main-resenas.component.html',
  styleUrls: ['./main-resenas.component.css']
})
export class MainResenasComponent implements OnInit{
  estrellas:number;
  arrayEstrellasCal:number[];
  arrayEstrellas:number[];
  arrayResenas:any[];
  numComentarios:number;
  user_cal:number;
  cal_preview:number =0;
  user_alias:string;
  user_contenido:string;
  validado:boolean=false;

  constructor(private fireService:FirebaseService ){
    this.user_cal = 0;
    this.user_alias ="";
    this.user_contenido = "";
    this.estrellas = 0;
    this.arrayEstrellasCal = Array(this.estrellas);
    this.arrayEstrellas = Array(5-this.estrellas);
    this.arrayResenas = [];
    this.numComentarios = this.arrayResenas.length;
    
  }
  ngOnInit(): void {
    this.refrescarComentarios();
    this.refrescarEstrellas();
  }


  guardarCal(num:number){
    this.user_cal = num;
    this.validarFormulario();
  }

  validarFormulario(){
    if(this.user_alias.trim().length>0 && this.user_contenido.trim().length>0 && this.user_cal>0){
      this.validado = true;
      
    }else{
      this.validado = false;
      
    }
  }

  refrescarEstrellas(){
    this.fireService.getCalificacion().then(data=>{
      
      this.estrellas = data;
      this.arrayEstrellasCal = Array(this.estrellas);
      this.arrayEstrellas = Array(5-this.estrellas);
    });
  }

  comentar(){
    if(this.validado){
      this.fireService.addComments({alias:this.user_alias,contenido:this.user_contenido,calificacion:this.user_cal, fecha:Date.now()}).then(data=>{
        this.refrescarComentarios();
        
      });
      this.limpiarFormulario(); 
    }
  }

  limpiarFormulario(){
    this.user_alias ="";
    this.user_cal = 0;
    this.user_contenido = "";
    this.validado = false;
  }

  refrescarComentarios(){
    this.fireService.getComments().then(
      data=>{
        this.arrayResenas = data;
        this.numComentarios = this.arrayResenas.length;
      }
    )
  }

}


