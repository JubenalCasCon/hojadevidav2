import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {



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

public primerparrafo:string="Lorem ipsum dolor, sit amet consectetur adipisicing elitEos sequi aperiam numquam cupiditate. libero nesciunt voluptatibus autem iusto possimus velit corrupti ducimus voluptatem eius eveniet dolor amet nobis, ab dicta!";
public segundoparrafo:string="Lorem ipsum dolor, sit amet consectetur adipisicing elitEos sequi aperiam numquam cupiditate. libero nesciunt voluptatibus autem iusto possimus velit corrupti ducimus voluptatem eius eveniet dolor amet nobis, ab dicta!";
public tercerparrafo:string="Lorem ipsum dolor, sit amet consectetur adipisicing elitEos sequi aperiam numquam cupiditate. libero nesciunt voluptatibus autem iusto possimus velit corrupti ducimus voluptatem eius eveniet dolor amet nobis, ab dicta!";



imagenperfil:string="assets/Imagenes/perfil_benjamin.png";

ccontenedor:string[]=["text-white", "font-bold", "hover:text-black", "italic", "colorcontenedor", "px-4", "py-2", "rounded-full", "text-center", "flex", "justify-center", "items-center"]

cimagen:string[]=["p-3", "m-3", "container-fluid", "mx-auto", "flex", "justify-center", "items-center", "float-none"]

cbarrainicial:string[]=["min-h-full", "p-3",  "barrainicial",  "flex", "justify-around", "items-center",  "sm:h-auto"]

cgrid:string[]=["grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "md:p-3"]
  constructor() { }

  ngOnInit(): void {
  }

}
