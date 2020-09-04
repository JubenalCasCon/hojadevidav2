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
  imagen:"assets/Imagenes/taller.jpg",
  contenido:"Mira lo que tengo es una propuesta innovadora para incentivar el comercio en tiempos de pandemia. Comunícate con nosotros , danos información básica de tu negocio y empieza a recibir ingresos para  tu negocio",
  url:"https://miraloquetengo.jubenalcastaneda.top/"
},

{
  titulo:"Escenica teatro Joven",
  imagen:"assets/Imagenes/teatro4.jpg",
  contenido:"El grupo de teatro joven de la Escuela Vocacional de Artes con sede en Los Mochis Sinaloa busca hacer llegar este maravillo espectáculo a todo el que lo disfrute.!Conoce a nuestro elenco y mantente antento de los eventos que el grupo realiza mes con mes ",
  url:"https://escenicateatro.jubenalcastaneda.top/"
},

{
  titulo:"Inocisa Los Mochis",
  imagen:"assets/Imagenes/5.jpg",
  contenido:"Son los adultos Mayores los que nos recuerdan lo maravillosa que es la vida. Por medio de su portal INOCISA te informa de los servicios que ofrece en su centro, las actividades realizadas con los ancianitos y las acciones con las cuales causa impacto en su comunidad ",
  url:"http://inocisa.org/"
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
