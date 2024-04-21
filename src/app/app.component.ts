import { Component, inject } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-anime-app';
  notificacion:String;
  showTelepronter:boolean;

  constructor(firebase:FirebaseService){
    this.notificacion = ` <p>Estamos trabajando en una nueva version de paga, </p>
    <a href="https://t.me/+mSdA43jjlTRkNzNh"> ingresa al canal</a>
    <p>para dejar pedidos o recomendaciones para esta nueva version y para notificarte cuando este desplegada, u </p>
    
        `;
        this.showTelepronter = false;
  }

  ocultarTelepronter(){
    this.showTelepronter = false;
  }
}
