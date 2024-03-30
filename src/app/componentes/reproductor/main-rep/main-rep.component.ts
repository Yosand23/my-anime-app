import { Component } from '@angular/core';

@Component({
  selector: 'app-main-rep',
  templateUrl: './main-rep.component.html',
  styleUrls: ['./main-rep.component.css']
})
export class MainRepComponent {

  secciones:any[];
  constructor(){
    this.secciones=[
      {
        titulo:"Vista del capitulo",
        imagen:"assets/vistaCap.jpg",
        reversed:false,
        alt:"Vista del capitulo de la aplicación",
        parrafos:[
          "Al inicio cargaran los idiomas disponibles, al seleccionar un idioma, este se pondrá de color naranja y se cargaran los servidores de video. Por defecto el idioma principal que cargara es latino.",
          "Los servidores de video cargaran automáticamente al ser de un solo idioma. Al seleccionar un servidor de video te llevara a la pagina de ese servidor, este se reproducirá automáticamente en la mayoría de los casos, si no debera iniciarlo manualmente.",
          "El reproductor local se abrirá una vez encuentre el video dentro de la pagina del servidor, los servidores de video que cuentan con reproductor local están destacados con el color verde. ",
          "Una vez seleccionado se pondrá de color naranja, por defecto se iniciara en el primer servidor que cuente con reproductor local."
        ]
      }
    ];
  }
}
