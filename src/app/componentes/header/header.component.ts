import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;
  constructor(private serice:FirebaseService){

  }

  actualizarDescarga(){
    this.serice.actualizarDescargas().then(
      data=>console.log(data)
      
    );
  }

  toogleMenu(){
    this.isOpen = !this.isOpen;
  }
}
