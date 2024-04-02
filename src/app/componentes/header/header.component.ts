import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;
  constructor(private service:FirebaseService, private router:Router){

  }

  actualizarDescarga(){
    this.service.actualizarDescargas().then(
      

    );
    this.router.navigate(["apoyanos"]);
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }
}
