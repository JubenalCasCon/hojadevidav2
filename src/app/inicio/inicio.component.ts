import { Component, OnInit } from '@angular/core';
import {cargaranimacion} from '../animations/carga.animations'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations:[]
})
export class InicioComponent implements OnInit {

_elements:string[]=['#8CA6ff','#FFAF99','#FFD666','#80DFFF','#73FFD5']; 
elements:string[]= this._elements;











imagenportada:string="assets/Imagenes/imagenportada.jpg"


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

public primerparrafo:string="Soy un desarrollador web enfocado en el frontend, la UX y la UI, realizando mis diseños en Abode XD y  programación en HTML con apoyo del Framework Angular.A lo largo de mi  ";
public segundoparrafo:string="carrera  he trabajado en diferentes lugares, he trabajado como administrador de proyectos Informáticos, desarrollando soluciones para todo tipo de empresas.";
public tercerparrafo:string="Para todo problema , siempre tengo una solución que se puede desarrollar"


imagenperfil:string="assets/Imagenes/perfil_benjamin.png";

ccontenedor:string[]=["text-white", "font-bold", "hover:text-black", "italic", "colorcontenedor", "px-4", "py-2", "rounded-full", "text-center", "flex", "justify-center", "items-center"]

cimagen:string[]=["p-3", "m-3", "container-fluid", "mx-auto", "flex", "justify-center", "items-center", "float-none"]

cbarrainicial:string[]=["min-h-full", "p-3",  "barrainicial",  "flex", "justify-around", "items-center",  "sm:h-auto"]

cgrid:string[]=["grid", "grid-cols-1", "md:grid-cols-3", "gap-6", "md:p-3"]
  constructor() { }

  ngOnInit(): void {
    

  }

  
}
