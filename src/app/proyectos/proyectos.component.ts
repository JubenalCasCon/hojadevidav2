import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

public tproyectos:any[]=
[
{
  titulo:"Mira lo que tengo",
  imagen:"assets/Imagenes/portadaonline.jpg",
  contenido:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam eaque perspiciatis aliquid, vero culpa quos quisquam optio nemo eligendi obcaecati nihil necessitatibus, hic cupiditate non dicta magnam. Repellat, officiis illo!"
},

{
  titulo:"Escenica teatro Joven",
  imagen:"assets/Imagenes/diateatro.jpg",
  contenido:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam eaque perspiciatis aliquid, vero culpa quos quisquam optio nemo eligendi obcaecati nihil necessitatibus, hic cupiditate non dicta magnam. Repellat, officiis illo!"
},

{
  titulo:"Inocisa Los Mochis",
  imagen:"assets/Imagenes/top.jpg",
  contenido:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam eaque perspiciatis aliquid, vero culpa quos quisquam optio nemo eligendi obcaecati nihil necessitatibus, hic cupiditate non dicta magnam. Repellat, officiis illo!"
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
