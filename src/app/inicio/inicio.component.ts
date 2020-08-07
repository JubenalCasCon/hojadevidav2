import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

imagenperfil:string="assets/Imagenes/perfil_benjamin.png";

public icontenedores:any[]=[

  {
    rotulo:"Repositorios"
  },

  {
    rotulo:"Diseños"
  },

  {
    rotulo:"Notas"
  }

]

  constructor() { }

  ngOnInit(): void {
  }

}
