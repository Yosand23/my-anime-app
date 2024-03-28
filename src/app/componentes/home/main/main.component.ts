import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  secciones=[
    {
      reversed:true,
      parrafos:[
        "Ofrecemos una amplia selección de servidores para que puedas disfrutar de tus animes y videos favoritos.",
        "Accedemos a las mejores páginas web para proporcionarte el contenido más reciente y variado. Analizamos sitios web de renombre que son conocidos por su extenso catálogo de animes y videos de alta calidad. ",
        "Al seleccionar una pagina como servidor, podras acceder a todo su catalogo y disfrutar de su contenido."
      ],
      titulo:"Servidores",
      imagen:"assets/servers.jpg"
    },
    {
      titulo:"Explorar",
      imagen:"assets/explore.jpg",
      parrafos:[
        "Adentrate y explora el extenso catalago que ofrece cada servidor para encontrar tus animes favoritos.",
        "Ademas, puedes filtrar el catalogo por los distintos generos que ofrece cada servidor y encontrar nuevos animes en dicho genero.",
        "Navega entre las distintas paginas de cada genero de manera sencilla al seleccionar el numero de pagina que se muestra."
      ],
      reversed:false
    },
    {
      titulo:"Favoritos",
      imagen:"assets/fav.jpg",
      parrafos:[
        "Ahora puedes guardar tus animes favoritos con un solo clic. Nuestra nueva función de Favorito te permite acceder rápidamente a tus series y episodios preferidos sin tener que buscarlos nuevamente. ¡Disfruta de tus contenidos favoritos en cualquier momento y en cualquier lugar!",
        "¿Tienes una lista de animes que adoras? Con nuestra función de Favoritos, puedes organizar fácilmente tus series y películas de anime en una lista personalizada. Mantén tus preferencias al día y accede rápidamente a tus contenidos favoritos sin perder tiempo buscándolos.",
        ],
      reversed:true
    },
    {
      titulo:"Historial",
      imagen:"assets/history.jpg",
      parrafos:[
        "Con nuestra función de historial, puedes revivir tus momentos favoritos de anime fácilmente.Nuestro historial te permite acceder rápidamente a los animes y episodios que has visto recientemente. ¡No vuelvas a perder la pista de dónde lo dejaste!",
        "¿Quieres ver primero lo más reciente? Con nuestra función de ordenamiento, puedes cambiar fácilmente el orden de tu historial para ver primero los animes y episodios más recientes. ",
        "Nunca tendrás que preocuparte por perder el hilo de tus animes favoritos. Gracias a nuestra función de continuación de reproducción, cada vez que vuelvas a ver un anime, comenzarás exactamente donde lo dejaste. "
      ],
      reversed:false
    }
  ]
  
}
