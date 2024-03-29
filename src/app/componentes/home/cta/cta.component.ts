import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  constructor(private service:FirebaseService){

  }

  actualizarDescarga(){
    this.service.actualizarDescargas().then();
  }
}
