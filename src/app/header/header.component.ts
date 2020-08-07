import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
/* 
arreglo de elementos en el header */

helementos:any[]=[

  {
    iconofa:"fa fa-user fa-2x ",
    textoicono:"¿Quien Soy?"
  },

  {
    iconofa:"fa fa-laptop fa-2x ",
    textoicono:"Mis Proyectos"
  },

  {
    iconofa:"fa fa-users fa-2x",
    textoicono:"Referencias"
  }


]

  constructor() { }

  ngOnInit(): void {
  }

}
