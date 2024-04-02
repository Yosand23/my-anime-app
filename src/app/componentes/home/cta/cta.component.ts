import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  constructor(private service:FirebaseService, private router:Router){
    
  }

  actualizarDescarga(){
    this.service.actualizarDescargas().then(
      

      );
      this.router.navigate(['apoyanos']);
  }
}
