import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;
  constructor(private service:FirebaseService){

  }

  actualizarDescarga(){
    this.service.actualizarDescargas().then(
      data=>console.log(data)
      
    );
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }
}
