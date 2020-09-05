import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate, state} from '@angular/animations';
@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css'],
  animations:[
    
    
    
    
    trigger('showUp',[
      state('0',style({
       
       height:'20em',
       color:'#CDCDCD'
       
        
      })),
      state('1',style({
        
       height:'55em',
       background:'#CDCDCD',
       borderRadius:'5%',
boxShadow:'30px',
color:'black'      
       
      
      })),
      transition('0 => 1',animate('1s ease-in')),
      transition('1 => 0',animate('3s  ease-out'))

    ])
  ]
})
export class ReferenciasComponent implements OnInit {

  
  


  
  
  
    
  instituciones:any[]=
  [
  {
    
      imagen1:"assets/Imagenes/ug1.jpg",
      imagen2:"assets/Imagenes/ug2.jpg",
      imagen3:"assets/Imagenes/ug3.jpg",
      imagen4:"assets/Imagenes/ug4.jpg",
      imagen5:"assets/Imagenes/ug5.jpg",
      
      
  },
  
  {
    
      imagen1:"assets/Imagenes/sacti1.jpg",
      imagen2:"assets/Imagenes/sacti2.jpg",
      imagen3:"assets/Imagenes/sacti3.jpg",
      imagen4:"assets/Imagenes/sacti4.jpg",
      imagen5:"assets/Imagenes/sacti5.jpg",
      
  },
  
  {
    
      imagen1:"assets/Imagenes/1.jpg",
      imagen2:"assets/Imagenes/2.jpg",
      imagen3:"assets/Imagenes/3.jpg",
      imagen4:"assets/Imagenes/4.jpg",
      imagen5:"assets/Imagenes/5.jfif",
      
      
  }
  
  ]
  
imagenug:string="assets/Imagenes/ug4.jpg"
imagensacti:string="assets/Imagenes/Sacti.jpg"
imageninocisa:string="assets/Imagenes/1.jpg"

/* clases enlazadas */
contenedorprincipal:any[]=['container-fluid', 'mx-auto', 'px-auto','pt-2','pb-2','h-auto','flex','flex-col','justify-center','items-center','text-center','p-5']

contenedorsecundario:any[]=['container', 'flex', 'flex-col', 'items-center','justify-center','px-3','py-4','m-2','text-center']

/* Elementos ocultos */
public mostrarug:boolean

public mostrarsacti:boolean

public mostrarinocisa:boolean


  constructor() { }

  ngOnInit(): void {

    this.mostrarug = false
    this.mostrarinocisa = false
    this.mostrarsacti = false
  }

  cambiarug()
  {
    this.mostrarug = !this.mostrarug
  }

  cambiarsacti()
  {
    this.mostrarsacti = !this.mostrarsacti
  }

  cambiarinocisa()
  {
    this.mostrarinocisa = !this.mostrarinocisa
  }

}
