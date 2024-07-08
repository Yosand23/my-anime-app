import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrl: './descargar.component.css'
})
export class DescargarComponent {
  version= 0;
  constructor(private service:FirebaseService, private router:Router){
    this.validarFecha();
    this.ingresarUser();
  }

  ingresarUser(){
    
  }

  validarFecha(){
    this.service.getActualizacion().then((data:any)=>{
      this.version = data["fecha"];
    });
  }
  actualizarDescarga(pos:number){
    this.service.actualizarDescargas(pos).then(
    
      );
      this.router.navigate(['apoyanos']);
  }

}
