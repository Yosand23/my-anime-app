import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  version= 0;
  constructor(private service:FirebaseService, private router:Router){
    this.validarFecha();
  }

  validarFecha(){
    this.service.getActualizacion().then((data:any)=>{
      this.version = data["fecha"];
    });
  }
  actualizarDescarga(){
    this.service.actualizarDescargas().then(
      

      );
      this.router.navigate(['apoyanos']);
  }
}
